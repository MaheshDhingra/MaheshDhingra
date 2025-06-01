"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Chat {
  id: string;
  name: string;
  messages: Message[];
}

const CHUNK_SIZE = 10;

function getInitialChats(): Chat[] {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("stelai-chats");
    if (saved) return JSON.parse(saved);
  }
  return [
    { id: "default", name: "New Chat", messages: [] }
  ];
}

export default function Home() {
  const [chats, setChats] = useState<Chat[]>(getInitialChats());
  const [currentChatId, setCurrentChatId] = useState(chats[0].id);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [renderedChunks, setRenderedChunks] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentChat = chats.find((c) => c.id === currentChatId)!;
  const totalChunks = Math.ceil(currentChat.messages.length / CHUNK_SIZE);
  const visibleMessages = currentChat.messages.slice(-renderedChunks * CHUNK_SIZE);

  useEffect(() => {
    localStorage.setItem("stelai-chats", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    setRenderedChunks(1);
  }, [currentChatId]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentChat.messages.length, currentChatId]);

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    if (e.currentTarget.scrollTop === 0 && renderedChunks < totalChunks) {
      setRenderedChunks((c) => c + 1);
    }
  }

  function updateChat(id: string, updater: (chat: Chat) => Chat) {
    setChats((prev) => prev.map((c) => (c.id === id ? updater(c as Chat) : c)));
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() && !file) return;
    let userMsg: Message = { role: "user", content: input };
    let newMessages = [...currentChat.messages];
    let uploadedFileUrl = null;
    if (file) {
      uploadedFileUrl = URL.createObjectURL(file);
      userMsg = { ...userMsg, content: `${input}\n[File: ${file.name}]` };
    }
    newMessages = [...newMessages, userMsg];
    updateChat(currentChatId, (chat: Chat) => ({ ...chat, messages: newMessages }));
    setInput("");
    setFile(null);
    setFileUrl(uploadedFileUrl);
    setLoading(true);
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "No response.";
    updateChat(currentChatId, (chat: Chat) => ({ ...chat, messages: [...chat.messages, { role: "assistant", content: reply }] }));
    setLoading(false);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  function createNewChat() {
    const id = Date.now().toString();
    const name = `Chat ${chats.length + 1}`;
    setChats((prev) => [...prev, { id, name, messages: [] }]);
    setCurrentChatId(id);
  }

  function selectChat(id: string) {
    setCurrentChatId(id);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-2xl flex gap-4">
        <aside className="w-56 bg-zinc-900 rounded shadow p-2 flex flex-col h-[80vh] border border-zinc-800 min-w-[14rem]">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-pink-400">Chats</span>
            <button onClick={createNewChat} className="text-xs bg-pink-600 text-white rounded px-2 py-1 hover:bg-pink-700 transition">New</button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => selectChat(chat.id)}
                className={`w-full text-left px-2 py-1 rounded transition ${chat.id === currentChatId ? "bg-pink-900 text-pink-200 font-semibold" : "hover:bg-zinc-800 text-zinc-200"}`}
              >
                {chat.name}
              </button>
            ))}
          </div>
        </aside>
        <div className="flex-1 min-w-0 bg-zinc-900 rounded shadow p-4 flex flex-col h-[80vh] border border-zinc-800 max-w-3xl">
          <h1 className="text-2xl font-extrabold text-pink-400 mb-2 text-center tracking-tight">StelAI</h1>
          <div
            className="flex-1 overflow-y-auto mb-2 space-y-2 border rounded p-2 bg-zinc-800 border-zinc-700"
            onScroll={handleScroll}
            style={{ display: "flex", flexDirection: "column-reverse" }}
          >
            {visibleMessages.slice().reverse().map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded max-w-[80%] text-sm break-words ${
                  msg.role === "user"
                    ? "bg-pink-600 text-white self-end ml-auto"
                    : "bg-zinc-700 text-zinc-100 self-start mr-auto"
                }`}
              >
                {msg.content}
                {msg.content.includes('[File:') && (
                  <span className="block text-xs text-zinc-400 mt-1">{msg.content.match(/\[File: (.+?)\]/)?.[1]}</span>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 items-center mt-2">
            <input
              className="flex-1 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              autoFocus
            />
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={e => setFile(e.target.files?.[0] || null)}
              className="text-xs text-zinc-100"
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-3 py-1 rounded disabled:opacity-60 hover:bg-pink-700 transition"
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <footer className="mt-4 text-zinc-500 text-xs text-center">Made with <span className='text-pink-400'>❤️</span> by Mahesh Dhingra & contributors</footer>
    </main>
  );
}

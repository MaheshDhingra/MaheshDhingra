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
    const res = await fetch("https://ai.hackclub.com/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 p-0">
      <div className="w-full h-screen flex gap-0">
        <aside className="w-64 bg-zinc-950 rounded-none shadow-none p-4 flex flex-col h-full border-r border-zinc-800 min-w-[16rem]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-pink-400 text-lg tracking-wide">Chats</span>
            <button onClick={createNewChat} className="text-xs bg-pink-600 text-white rounded px-3 py-1 hover:bg-pink-700 transition">New</button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => selectChat(chat.id)}
                className={`w-full text-left px-3 py-2 rounded transition text-base ${chat.id === currentChatId ? "bg-pink-900 text-pink-200 font-semibold" : "hover:bg-zinc-800 text-zinc-200"}`}
              >
                {chat.name}
              </button>
            ))}
          </div>
        </aside>
        <div className="flex-1 min-w-0 bg-zinc-900 rounded-none shadow-none p-0 flex flex-col h-full border-none max-w-full">
          <div className="flex flex-col flex-1 h-full">
            <h1 className="text-3xl font-extrabold text-pink-400 mb-4 text-center tracking-tight pt-6">StelAI</h1>
            <div
              className="flex-1 overflow-y-auto mb-2 space-y-4 border-none rounded-none p-6 bg-zinc-900"
              onScroll={handleScroll}
              style={{ display: "flex", flexDirection: "column-reverse" }}
            >
              {visibleMessages.slice().reverse().map((msg, i) => {
                const fileMatch = msg.content.match(/\[File: (.+?)\]/);
                const isImage = fileMatch && fileMatch[1].match(/\.(jpg|jpeg|png|gif|webp)$/i);
                const isPdf = fileMatch && fileMatch[1].match(/\.pdf$/i);
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-xl max-w-2xl text-base break-words shadow-md ${
                      msg.role === "user"
                        ? "bg-pink-600 text-white self-end ml-auto"
                        : "bg-zinc-800 text-zinc-100 self-start mr-auto"
                    }`}
                  >
                    <div>{msg.content.replace(/\n\[File: .+?\]/, "")}</div>
                    {fileMatch && (
                      <div className="mt-2">
                        {isImage && fileUrl && (
                          <img src={fileUrl} alt={fileMatch[1]} className="max-w-xs max-h-48 rounded border border-zinc-700" />
                        )}
                        {isPdf && fileUrl && (
                          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-pink-200 underline">View PDF: {fileMatch[1]}</a>
                        )}
                        {!isImage && !isPdf && (
                          <span className="block text-xs text-zinc-400 mt-1">{fileMatch[1]}</span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={sendMessage} className="flex gap-3 items-center p-6 border-t border-zinc-800 bg-zinc-950">
              <input
                className="flex-1 border border-zinc-700 bg-zinc-900 text-zinc-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={loading}
                autoFocus
              />
              <label className="flex items-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={e => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                  disabled={loading}
                />
                <span className="bg-zinc-800 text-zinc-200 px-3 py-2 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition text-sm">Upload</span>
              </label>
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 rounded-lg disabled:opacity-60 hover:bg-pink-700 transition text-base font-semibold"
                disabled={loading}
              >
                {loading ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="py-4 text-zinc-500 text-sm text-center w-full bg-zinc-950 border-t border-zinc-800 mt-0">Made with <span className='text-pink-400'>❤️</span> by Mahesh Dhingra & contributors</footer>
    </main>
  );
}

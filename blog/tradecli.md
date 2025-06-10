
---
layout: post
title: "TerminalCraft: Building TradeCLI for Hack Club"
description: "My journey building TradeCLI for TerminalCraft and winning a Raspberry Pi 4."
date: 2025-03-15
---

> **Recently, I participated in [TerminalCraft](https://hackclub.com/terminalcraft/) by Hack Club, where I built _TradeCLI_—a command-line trading companion designed to make managing trades simple, fast, and fun, all powered by live market data from Alpha Vantage.**

---

## 🚀 What is TradeCLI?

**TradeCLI** is a Python-based CLI app that lets you track, analyze, and manage trades right from your terminal. It fetches real-time prices, charts, and market data using Alpha Vantage, with _no API key setup needed_ for basic features.

> **Goal:** Make trading accessible and enjoyable for everyone, especially beginners.

---

## ✨ Features

- **Beginner-Friendly:** Intuitive commands you’ll remember in seconds.
- **Fast & Lightweight:** No bloat, just the essentials.
- **Cheerful UX:** Friendly prompts and positive feedback.
- **Visuals:** Generate simple charts for quick price insights.
- **Portfolio Overview:** Track your positions and performance.
- **Favourites:** Mark tickers you love for quick access.
- **Market Screener:** Find opportunities at a glance.
- **Live Market Data:** All prices and charts are real, not simulated.
- **Gainers/Losers:** See top movers in your session.
- **Last Trade Time:** Track how fresh your data is.
- **Robust Error Handling:** Prevents crashes with invalid ticker data.
- **Bug-Free Analytics:** Reliable analytics, gainers, and screener commands.
- **Hack Club AI Integration:** Ask questions or get help from AI right in your terminal.

---

## 🛠️ Commands Overview

| **Command**            | **Description**                             |
|------------------------|---------------------------------------------|
| `help`                 | Show all available commands                 |
| `quote <ticker>`       | Fetch current market quote                  |
| `buy <ticker> <qty>`   | Buy shares of a ticker                      |
| `sell <ticker> <qty>`  | Sell shares of a ticker                     |
| `positions`            | View current holdings and P&L               |
| `chart <ticker>`       | Show price history chart                    |
| `dashboard`            | View overall portfolio performance          |
| `analytics`            | Show advanced analytics                     |
| `alert`                | Set price/volume alerts                     |
| `integrations`         | Integrations menu                           |
| `exportcsv`            | Export portfolio to CSV                     |
| `customize`            | Customize dashboard                         |
| `popular`              | Display popular trading pairs               |
| `gainers`              | Show top gainers and losers (session)       |
| `lasttrade`            | Show last trade time for tickers            |
| `favourite <ticker>`   | Add ticker to favourites                    |
| `removefav`            | Remove ticker from favourites               |
| `favourites`           | List all favourite tickers                  |
| `screener`             | Run the market screener                     |
| `ai <prompt>`          | Ask Hack Club AI any question               |
| `clear` / `cls`        | Clear the terminal screen                   |
| `exit`                 | Exit TradeCLI                               |

---

## ⚡ Getting Started

**Clone the repository:**

```sh
git clone https://github.com/MaheshDhingra/TradeCLI.git
cd TradeCLI
```

**(Optional) Set up a virtual environment:**

```sh
python -m venv .venv
.venv\Scripts\activate  # On Windows
# or
source .venv/bin/activate  # On Mac/Linux
```

**Install dependencies:**

```sh
pip install -r requirements.txt
```

**Run the app:**

```sh
python main.py
```

---

## 📋 Requirements

- Python 3.8 or higher
- Internet connection (for live data fetching)
- Terminal/Command Line access

---

## 📄 License

This project is licensed under the MIT License. You're free to use, modify, and distribute it.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to improve.

---

## 🏆 My Experience & Prize

Building TradeCLI for TerminalCraft was a fantastic experience. I learned a lot about API integration, CLI UX, and robust error handling. The best part? I received a **Raspberry Pi 4** as a prize for my project!

---

## 🎉 Outro

TerminalCraft was an amazing event—full of learning, coding, and community. TradeCLI is now open-source, and I hope it helps others on their trading journey. Happy trading, and may your positions always be green! 📈✨


---  
layout: post  
title: Introducing tradecli: A Simple CLI Tool for Stock Trading  
description: Announcing tradecli, a command-line tool to simplify stock trading workflows  
date: 8th June 2025  
---

I'm excited to introduce **tradecli**, a lightweight command-line tool designed to streamline and automate basic stock trading tasks. This project was born out of my need for a fast, scriptable way to interact with my brokerage account and manage trades directly from the terminal.

## Why tradecli?

Most trading platforms offer web or app interfaces, but few provide a simple CLI for automation or scripting. With tradecli, you can:

- Check real-time stock prices
- Place buy and sell orders
- View your portfolio and order history
- Export data for analysis

All from your terminal, with minimal setup.

## Features

- **Cross-platform:** Works on Windows, macOS, and Linux  
- **Secure:** API keys and credentials are stored securely  
- **Scriptable:** Integrate with your own shell scripts or automation workflows  
- **Extensible:** Easily add new commands or broker integrations

## Getting Started

1. Clone the repository:  
  ```sh
  git clone https://github.com/yourusername/tradecli.git
  ```
2. Install dependencies and build:  
  ```sh
  cd tradecli  
  pip install -r requirements.txt
  ```
3. Configure your API credentials in `config.yaml`.

4. Run your first command:  
  ```sh
  python tradecli.py price AAPL
  ```

## Roadmap

- Support for more brokers  
- Advanced order types  
- Portfolio analytics  
- Plugin system

## Contributing

Contributions are welcome! Check out the [GitHub repo](https://github.com/yourusername/tradecli) for issues and pull requests.

Stay tuned for updates and new features as tradecli evolves!

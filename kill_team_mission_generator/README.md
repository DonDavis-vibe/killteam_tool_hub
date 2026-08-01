# ⚔️ Kill Team 3rd Edition (Approved Ops 2025) Mission Generator

<p align="center">
  <img src="https://img.shields.io/badge/Edition-3rd%20Edition%20(2025)-FF5A1E?style=for-the-badge&labelColor=13131a" alt="Kill Team 3rd Edition">
  <img src="https://img.shields.io/badge/Language-EN%20%7C%20DE-3b82f6?style=for-the-badge&labelColor=13131a" alt="Bilingual EN/DE">
  <img src="https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-e8b059?style=for-the-badge&labelColor=13131a" alt="Vanilla Web App">
  <img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge&labelColor=13131a" alt="MIT License">
</p>

A premium, responsive, single-page tabletop companion and mission generator web application for **Warhammer 40,000: Kill Team (3rd Edition / Approved Ops 2025)**. 

Designed with a sleek, dark obsidian and glassmorphic **Warhammer 40K aesthetic**, this tool helps you and your buddies instantly generate balanced matched play missions, plan your terrain layouts on an interactive tabletop diagram, track victory points, and browse tactical operations—all without needing a live server or internet connection!

---

## ✨ Key Features

### 🎲 Instant Mission & Map Generation
* **Complete Approved Ops 2025 Deck**: Built-in competitive database featuring all **9 official 3rd Edition Critical Operations** (*Secure, Loot, Transmission, Orb, Stake Claim, Energy Cells, Download, Data, and Reboot*) with their exact AP costs, effects, conditions, and VP scoring rules.
* **Tabletop Map Generator**: Generates randomized 30" x 22" battlefield layouts with player drop zones, territory borders, and precise objective marker placement (P1, P2, and Neutral Center objectives).

### 🇩🇪 / 🇬🇧 Full Bilingual Support (English & German)
* **One-Click Language Switch**: Toggle between **English (`EN`)** and **German (`DE`)** at any time using the header button.
* **Complete Localization**: Translates the entire user interface, mission rules, action conditions, terrain placement guides, and game sequence steps on the fly. Your preference is automatically saved to your browser's local storage.

### 🏰 Interactive Battlefield & Terrain Guide
* **Color-Coded Terrain Recommendations**: Every generated map SVG includes visual placement guides to ensure fair and balanced cover on your physical board:
  * 🔲 **HEAVY / SCHWER (Orange Hatched Boxes)**: Large ruins, walls, or containers placed in the mid-board to block direct line of sight between drop zones.
  * ➖ **LIGHT / LEICHT (Cyan Dashed Boxes)**: Barricades, pipes, and crates scattered around objective markers to shield advancing operatives while on a Conceal order.
  * ⬆️ **VANTAGE / ERHÖHT (Gold Solid Boxes)**: Elevated platforms or upper floors outside drop zones for shooters to overlook light cover.
* **Starter Set Companion**: Includes dedicated tips for setting up terrain using standard Games Workshop Starter Set killzones.

### 📊 Comprehensive Tabletop Tools
* **Interactive VP Tracker**: Keep score during your game with sleek `+` / `-` controls for Primary Ops, Kill Ops, and Tac Ops. Dynamically calculates your **Primary Op Bonus VP** (half primary score, rounded up) and highlights player totals in orange and cyan.
* **Kill Grade Calculator**: An interactive lookup table that adapts to the exact number of enemy operatives (6 to 14 models), showing precise incapacitation thresholds for grades 1 through 5.
* **Game Sequence Checklist**: A step-by-step collapsible companion guiding players through the 5 official phases of matched play (Battle Setup, Operative Selection, Deployment, Turning Points, and End of Battle).
* **Tac Ops Browser**: Filterable database of all **12 Tactical Operations** across the 4 core archetypes (*Infiltration, Recon, Security,* and *Seek & Destroy*).

---

## 🚀 Quickstart & Installation

This application is built with 100% **pure Vanilla HTML, CSS, and JavaScript**. There are **no build steps, no npm packages, no node modules, and no backend servers required!**

### 1. Running Locally (Offline Companion)
1. Clone or download this repository to your computer or tablet:
   ```bash
   git clone https://github.com/YourUsername/kill-team-mission-generator.git
   ```
2. Double-click the `index.html` file to open it directly in any modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge).
3. That's it! You are ready to generate missions and play.

### 2. Hosting for Free on GitHub Pages
Want to share this tool with your tabletop gaming group via a live web URL? You can host it for free in 3 clicks:
1. Push this folder to a public GitHub repository.
2. Go to your repository **Settings** ➡️ **Pages**.
3. Under **Build and deployment** / **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
4. Within 60 seconds, your Kill Team Mission Generator will be live online!

---

## ❓ Beginner's Tabletop FAQ

### What physical components do I need to play a mission?
To set up a game using this app, you and your opponent will need:
* **Two Kill Teams**: Your miniatures, operative datacards, and Conceal/Engage order tokens.
* **Spielfeld & Gelände (Board & Terrain)**: A 30" x 22" game board (like the folded cardboard board from the Starter Set) and terrain pieces.
* **6 Objective Markers**: Numbered 1 through 6 (or marked P1, P2, and Center). Check the generated Map diagram in the app and drop your physical markers on your table exactly where the circles appear!
* **Dice & Measuring Tool**: Six-sided dice (D6) and a measuring tape or gauge measured in inches (`"`).

### Do I need to check all the boxes in the Game Sequence checklist?
**No! You do not need to check any of the boxes to play a game.** The checklist is simply an optional, step-by-step companion for tournament and competitive players to ensure no setup rules (such as secret equipment drafting or CP starting rules) are forgotten. For casual games with buddies, just generate a mission and map, place your terrain and objectives, deploy your models, grab 2 Command Points each, and start rolling dice!

---

## 📁 Project Structure

```text
kill-team-mission-generator/
│
├── index.html       # Main HTML structure, layout sections, and UI containers
├── style.css        # Dark obsidian WH40K design system, glassmorphism, and responsive grid rules
├── app.js           # Mission database (9 Crit Ops, 12 Tac Ops, 6 Maps), SVG terrain generator, and localization
├── README.md        # Documentation and project overview
├── LICENSE          # MIT License
└── .gitignore       # Git ignore rules for OS and editor files
```

---

## 🤝 Contributing & Customization
Contributions, bug reports, and feature requests from the tabletop gaming community are warmly welcomed! 
* Want to add custom house rules, new terrain layouts, or homebrew mission packs? Simply fork the repository and add your data objects to the `critOps`, `tacOps`, or `maps` arrays in `app.js`!

---

## ⚖️ License & Disclaimer

This project is open-source and licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

**Unofficial Fan Content Disclaimer**:
This application is an unofficial, fan-made tool created for tabletop gaming entertainment and convenience. It is not endorsed, sponsored, affiliated with, or approved by Games Workshop Ltd. *Warhammer 40,000, Kill Team*, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likenesses thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world. All rights reserved to their respective owners. No copyright infringement is intended.

# Warhammer Kill Team Hub

A centralized, premium web hub for various unofficial Warhammer 40,000 Kill Team utilities and tools. This repository aggregates four specialized web applications into a single accessible portal, designed to streamline your tabletop experience for Kill Team 3rd Edition (Approved Ops 2025). 

The Hub landing page and all included tools are fully bilingual in **English** and **German**. Your language preference syncs automatically across all tools!

All applications run entirely in your browser with zero backend requirements, making them fast and fully portable.

## Included Applications

### 1. Mission Generator & General Tools
A massive, comprehensive utility suite for managing the core rules of a Kill Team match.
* **Mission Generator:** Randomly generates a matched play setup, including 1 of 9 Critical Operations (Primary Missions) and 1 of 6 official map layouts.
* **Interactive Line of Sight (LoS) Sandbox:** A drag-and-drop tool to resolve LoS arguments! Drag a shooter, a target, and terrain pieces (Light/Heavy) around to automatically calculate if a shot is obscured, in cover, or valid based on Engage/Conceal orders.
* **N-Player VP Tracker:** An extremely robust Victory Point tracker that supports anywhere from 2 to 6+ players! Track Crit Ops, Kill Ops, Tac Ops, Command Points, and Primary Bonuses dynamically.
* **Tac Ops Reference:** A filterable database of all universal Tac Ops (Infiltration, Recon, Security, Seek & Destroy).
* **Pre-game Checklist:** An interactive step-by-step checklist to guide you through the setup of a 3rd Edition match.
* **Kill Grade Calculator:** Automatically calculates Kill Grades based on the number of enemy operatives you are facing.

### 2. Exaction Squad (Arbites) Helper
Specialized tracking tools for the Adeptus Arbites Exaction Squad Kill Team.
* **Team Builder:** Construct a valid 11-operative roster (1 Proctor-exactant and 10 others), validating max gunner and subductor limits.
* **Match Tracker:** Track the Wounds and operational status of your Arbitrators mid-game.
* **Tokens & Justice Tracker:** Keep a log of your "Marked for Justice" targets, Cyber-Mastiff "Apprehend" targets, and Nuncio-aquila markers.
* **Rules Reference:** Quick access to the complex Faction Rules (Ruthless Efficiency, Repress), Strategy Ploys, and Firefight Ploys.

### 3. Hearthkyn Salvagers (Flammkyn) Helper
A comprehensive datapad designed specifically for Hearthkyn Salvager Kill Teams.
* **Team Builder:** Construct a legal 10-operative roster. The app automatically validates limits, requires a Theyn leader, and restricts heavy weapon duplications for Gunners.
* **Match Tracker:** A live dashboard to track the current Wounds (LP) and Status (Alive/Incapacitated) of your active operatives during a match.
* **Grudge Tracker:** A dedicated system for managing your Grudge Tokens. Easily add enemy targets, tick their token count up or down, and keep track of who owes the Kin a blood debt.
* **Rules Reference:** Quick, organized access to your Faction Rules, Strategy Ploys, and Firefight Ploys.

### 4. Mandrake Helper
Specialized tracking tools tailored specifically for the Mandrake Kill Team.
* **Team Builder:** Construct a valid 9-operative roster, automatically ensuring your Nightfiend leader is selected.
* **Match Tracker:** Track the Wounds and operational status of your slippery shadow-dwellers mid-game.
* **Token & Soul Harvest Tracker:** Manage the unique resources of the Mandrakes. Includes default trackers for Soul Harvest Points (for the Chooser of the Flesh), Balefire Tokens, and Shadow Portals, with the ability to add custom trackers as needed.
* **Rules Reference:** Quick access to the complex Faction Rules, Strategy Ploys, and Firefight Ploys.

---

## Running Locally

To run this project locally, simply clone the repository and open `index.html` in any modern web browser. No build steps or servers are required.

```bash
git clone https://github.com/DonDavis-vibe/killteam_tool_hub.git
cd killteam_tool_hub
# Open index.html in your browser
```

## Deployment

This project is built using static HTML, CSS, and vanilla JavaScript. It is perfectly suited for free static hosting platforms like **GitHub Pages** or **Cloudflare Pages**.

To deploy via GitHub Pages:
1. Go to your repository settings on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under "Build and deployment", set the source to **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Your hub will be live within a few minutes!

---

## Legal Disclaimer

This is an unofficial, fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way. All tabletop game simulation mechanics and references are intended for ease of play and referencing rules owned by Games Workshop.

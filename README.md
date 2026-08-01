# Warhammer Kill Team Hub

A centralized, premium web hub for various Warhammer 40,000 Kill Team utilities and tools. This repository aggregates four specialized web applications into a single accessible portal, designed to streamline your tabletop experience. 

The Hub landing page is fully bilingual in **English** and **German**, and syncs your language preference across all of the included tools.

All applications run entirely in your browser with zero backend requirements, making them fast and fully portable.

## Included Applications

### 1. Hearthkyn Salvagers (Flammkyn) Helper
A comprehensive datapad designed specifically for Hearthkyn Salvager Kill Teams. Fully bilingual in **English** and **German**.
* **Team Builder:** Construct a legal 10-operative roster. The app automatically validates limits, requires a Theyn leader, and restricts heavy weapon duplications for Gunners.
* **Match Tracker:** A live dashboard to track the current Wounds (LP) and Status (Alive/Incapacitated) of your active operatives during a match.
* **Grudge Tracker:** A dedicated system for managing your Grudge Tokens. Easily add enemy targets, tick their token count up or down, and keep track of who owes the Kin a blood debt.
* **Rules Reference:** Quick, organized access to your Faction Rules, Strategy Ploys, and Firefight Ploys.

### 2. Mandrake Helper
Specialized tracking tools tailored specifically for the Mandrake Kill Team. Fully bilingual in **English** and **German**.
* **Team Builder:** Construct a valid 9-operative roster, automatically ensuring your Nightfiend leader is selected.
* **Match Tracker:** Track the Wounds and operational status of your slippery shadow-dwellers mid-game.
* **Token & Soul Harvest Tracker:** Manage the unique resources of the Mandrakes. Includes default trackers for Soul Harvest Points (for the Chooser of the Flesh), Balefire Tokens, and Shadow Portals, with the ability to add custom trackers as needed.
* **Rules Reference:** Quick access to the complex Faction Rules, Strategy Ploys, and Firefight Ploys for Mandrakes.

### 3. Exaction Squad Helper
Specialized tracking tools for the Adeptus Arbites Exaction Squad Kill Team. Fully bilingual in **English** and **German**.
* **Team Builder:** Construct a valid 11-operative roster (1 Proctor-exactant and 10 others), validating max gunner and subductor limits.
* **Match Tracker:** Track the Wounds and operational status of your Arbitrators mid-game.
* **Tokens & Justice Tracker:** Keep a log of your "Marked for Justice" targets, Cyber-Mastiff "Apprehend" targets, and Nuncio-aquila markers.
* **Rules Reference:** Quick access to the complex Faction Rules (Ruthless Efficiency, Repress), Strategy Ploys, and Firefight Ploys for the Exaction Squad.

### 4. Mission Generator
A quick and easy utility to generate varied, randomized gameplay setups so you can get right into the action.
* **Randomized Missions:** Quickly generate primary objectives, deployment layouts, and mission rules to keep your games fresh.

---

## Running Locally

To run this project locally, simply clone the repository and open `index.html` in any modern web browser. No build steps or servers are required.

```bash
git clone https://github.com/DonDavis-vibe/killteam_hub.git
cd killteam_hub
# Open index.html in your browser
```

## Deployment

This project is built using static HTML, CSS, and vanilla JavaScript. It is perfectly suited for free static hosting platforms like **GitHub Pages**.

To deploy via GitHub Pages:
1. Go to your repository settings on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under "Build and deployment", set the source to **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Your hub will be live within a few minutes!

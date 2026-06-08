# Hackathon Sponsor Dashboard

A sponsor management dashboard built with React and Vite, styled using Tailwind CSS. Allows users to search sponsors, filter them by sponsorship tier, and view the total funds secured.

## Live Demo

Demo Link: **https://sponsor-dashboard-aj59.vercel.app/**

## Built With

- **React 19**
- **Vite**
- **Tailwind CSS**

## Project Structure

```bash
hackathon-sponsor-dashboard/
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── SponsorCard.jsx
│   │   └── StatCard.jsx
│   ├── data/
│   │   └── sponsors.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Functionality

### Search Sponsors

Use the search bar to find sponsors by name.

### Filter by Tier

Filter sponsors using the tier buttons:

- All
- Platinum
- Gold
- Silver
- In-Kind

### Total Funds Calculation

The dashboard automatically calculates and displays the total sponsorship amount based on the currently applied filters.

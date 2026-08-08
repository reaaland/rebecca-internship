# Ultraverse NFT Marketplace — Frontend Simplified Internship Project

A responsive React marketplace interface completed as part of my Frontend Simplified internship work.

**Live project:** https://rebecca-internship.vercel.app  
**Portfolio:** https://www.rebeccaiaaland.com

## Project context

Frontend Simplified provided the starter project, visual direction, assets, API endpoints, and project requirements. My work focused on turning those requirements into a working responsive application and troubleshooting the behavior across the different views.

This is a learning and implementation project, not an original marketplace product or visual-design claim.

## What I implemented

- Responsive React pages and reusable marketplace components
- API-driven Hot Collections, New Items, Top Sellers, Explore, author, and item-detail experiences
- Loading and skeleton states while remote data is being requested
- Responsive `react-slick` carousels with custom navigation and desktop/tablet/mobile breakpoints
- Live countdown timers for expiring NFT listings
- Explore-page sorting through API filters and incremental “Load more” behavior
- React Router navigation between marketplace, author, and item-detail views
- Responsive card, image, spacing, and button refinements across screen sizes
- Deployment through Vercel

## Technical focus

**React · JavaScript · React Router · Axios · react-slick · CSS · Responsive Design · REST APIs · Loading States · Vercel**

One of the most useful parts of this project was learning how multiple frontend concerns work together: asynchronous data, loading feedback, reusable UI, routing, timers, carousels, and responsive behavior rather than building a single static page.

## Running locally

```bash
npm install
npm start
```

The project uses Create React App and runs locally at `http://localhost:3000` by default.

## Build

```bash
npm run build
```

## Notes

The repository is a fork of the Frontend Simplified NFT marketplace starter. Some marketplace actions, such as connecting a real crypto wallet or purchasing an NFT, are demonstration-only and are not implemented as real transactions.

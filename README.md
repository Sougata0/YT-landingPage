# YT Landing Page

A YouTube-inspired landing page built with React and Tailwind CSS.

This project focuses on building a clean, familiar video platform UI with reusable components, state-driven rendering, and simple client-side data management.

## Why I Built This

I created this project to practice:

- building a real-world style UI with component composition
- managing shared state with React Context and hooks
- rendering dynamic lists (channels and videos) from local data
- creating a responsive layout similar to a production app

## Features

- Sticky top navigation bar with menu toggle, search UI, and action buttons
- Expandable/collapsible sidebar
- Subscription list with channel avatars and click-to-filter behavior
- Home feed and channel-based feed switching
- Reusable video card components
- Responsive video grid layout for multiple screen sizes
- LocalStorage-backed mock dataset for channels and videos

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Context API + React hooks (`useState`, `useEffect`, `useContext`)
- Lucide React icons

## Project Structure

```text
src/
	components/
		Navbar/        # top navigation
		sidebar/       # sidebar + subscriptions + utility sections
		contents/      # video content cards and topic section
		others/        # page-level content wrappers
	context/
		AuthProvider.jsx   # context provider for creator/video data
	utils/
		LocalStorage.jsx   # mock data source + localStorage helpers
	App.jsx              # root UI layout and state orchestration
	main.jsx             # app bootstrap
```

## Data Flow (High Level)

1. `AuthProvider` seeds and reads creator data from `localStorage`.
2. `App.jsx` consumes context data and stores active UI state (`userData`, `activePage`, `sidebar`).
3. Sidebar interactions update `userData` and `activePage`.
4. Content area renders either home feed or selected channel videos based on state.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Current Limitations

- Search bar and Shorts click are currently UI-first (no search/filter logic yet).
- Data is mock data only (no backend/API integration).
- Authentication and personalized recommendations are not implemented.

## Next Improvements

- Add real search/filter behavior
- Add Shorts feed interactions
- Connect to API-backed data
- Add routing for separate pages
- Improve accessibility and keyboard navigation

## Author

Built by Parimal Majhi

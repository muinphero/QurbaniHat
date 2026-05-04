# QurbaniHat

QurbaniHat is a modern livestock booking platform for Qurbani where users can browse cows and goats, inspect full animal details, and submit a booking form after authentication.

## Live URL

https://qurbani-hat-one.vercel.app/

## Key Features

- Responsive layout for mobile, tablet, and desktop
- Home page with hero banner, featured animals, Qurbani tips, top breeds, and a market trust section
- All Animals page with price sorting and loading state
- Animal details page with private booking form and success toast
- Login, register, Google social login simulation, avatar, and logout
- Private My Profile page with profile update route
- Not-found page for unknown routes
- Animal data loaded from a JSON file
- Environment variable examples in `.env.example`
- Vercel rewrite config for route reload support

## Challenge Requirements

- My Profile route displays logged-in user's name, photo, and email
- Update Information route updates name and image using an `authClient.updateUser({ image, name })` style API
- Animate.css is used for card entrance animation

## NPM Packages Used

- React
- React Router DOM
- Vite
- React Hot Toast
- Lucide React
- Animate.css

## Routes

- Public: `/`, `/animals`, `/login`, `/register`
- Private: `/details-page/:id`, `/my-profile`, `/update-profile`

## Local Setup

```bash
npm install
npm run dev
```

Create `.env` from `.env.example` before running locally.

# Zenith Client

React front end for the Zenith car dealership platform, built with Vite.

## Stack

- React 19 with Vite 7
- Material UI for components and theming
- Redux Toolkit for state management
- React Router for routing
- Axios for API calls

## Scripts

```bash
npm install     # install dependencies
npm run dev     # start the dev server on http://localhost:5173
npm run build   # build for production into dist/
npm run preview # serve the production build locally
npm run lint    # run ESLint
```

## API

The dev server talks to the Express API on `http://localhost:5001`. Make sure
the server in `../server` is running before using pages that fetch data.

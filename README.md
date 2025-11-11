# MERN Bug Tracker — Testing & Debugging (Week 6)

Lightweight bug tracker used to practice testing, debugging, and error-handling in a MERN-style app. The repo contains a simple Express + MongoDB backend and a React frontend with component tests.

## Project summary

- Backend: Express, Mongoose. CRUD API at `backend/routes/bugs.js`.
- Frontend: React components under `frontend/src/components` for reporting and listing bugs.
- Testing: Jest + Supertest (backend), React Testing Library + Jest (frontend).

## Features implemented

- Report a new bug (title + description)
- View all reported bugs
- Update a bug's status (open | in-progress | resolved)
- Delete a bug

## Tech stack

- Node.js, Express
- MongoDB + Mongoose
- React, Axios
- Jest, Supertest, React Testing Library

## Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or cloud) — used for development. Integration tests can use a separate test DB or an in-memory DB (recommended).

## Setup and run (quick)

1. Backend

```powershell
cd backend
npm install
# create a .env with:
# MONGO_URI=mongodb://localhost:27017/bugs
# MONGO_URI_TEST=mongodb://localhost:27017/bugs_test
npm run dev      # start server (nodemon)
```

2. Frontend

```powershell
cd frontend
npm install
npm start
```

Open the frontend at http://localhost:3000 and ensure the backend is running on port 5000 (default) or set `PORT` accordingly.

## Tests

Backend

```powershell
cd backend
npm test                # all backend tests (unit + integration)
npm run test:unit       # unit tests only
npm run test:integration# integration tests only (requires MONGO_URI_TEST)
```

Frontend

```powershell
cd frontend
npm test -- --watchAll=false
```

To generate coverage reports:

```powershell
# Backend
cd backend
npm test -- --coverage

# Frontend
cd frontend
npm test -- --coverage --watchAll=false
```

Note: If you want reproducible integration tests without an external MongoDB, I can help add `mongodb-memory-server` and update the integration tests to use it.

## Debugging techniques used / recommended

- Console logging and clear error messages in Express global error handler.
- React Error Boundary implemented at `frontend/src/components/ErrorBoundary.js` to catch render-time errors.
- Node.js inspector: run the server with `node --inspect-brk server.js` and open `chrome://inspect`.
- Browser DevTools + React DevTools for client-side debugging.
- Jest watch mode for iterative testing: `npm test -- --watch`.

## Error handling

- Backend: global error handler in `backend/server.js` logs errors and returns 500 responses.
- Frontend: `ErrorBoundary` component provides graceful fallback UI when components crash.

## CI / Submission checklist (recommended)

Before pushing or submitting:

- Ensure all tests pass locally (backend & frontend).
- Add `.env` to `.gitignore` and do not commit secrets.
- Add `coverage/` and `build/` to `.gitignore`.

Recommended files to exclude from Git (do NOT push):

- `node_modules/` (root, backend, frontend)
- `.env` files and any secrets
- `coverage/` test outputs
- `build/` or `dist/` bundles
- editor folders like `.vscode/`, `.idea/`
- OS files like `.DS_Store`

Create a root `.gitignore` if none exists — this repo includes one.

If you want CI, I can add a GitHub Actions workflow to run tests on push/PR and optionally upload coverage.

## Push to GitHub (PowerShell)

```powershell
cd "c:\Users\user\OneDrive\Desktop\PLP\Mern Stack\mern-bug-tracker"
git add .
git commit -m "Prepare project for submission: tests, README, .gitignore"
git remote add origin https://github.com/vanessaNjoroge2/testing-and-debugging-ensuring-mern-app-reliability-vanessaNjoroge2.git
git branch -M main
git push -u origin main
```

If the remote already exists, simple push:

```powershell
git add .
git commit -m "Update: tests and README"
git push
```

If the remote contains commits (non-fast-forward), run:

```powershell
git pull --rebase origin main
# resolve conflicts if any, then
git push
```


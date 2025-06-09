# Node.js Informational Website with Express

A simple Node.js website using Express with 4 pages:
- Home page (/)
- About page (/about)
- Contact page (/contact-me)
- 404 page (for non-existent routes)

## Setup

```bash
# Install dependencies
npm install
```

This project uses Express.js for routing and serving static files.

## Running the server

```bash
# Start the server
npm start

# Or with auto-restart on file changes (Node.js v18.11.0+)
npm run dev
```

The server will start on http://localhost:8080

## Routes

- `/` - Home page
- `/about` - About page
- `/contact-me` - Contact page
- Any other path will serve the 404 page
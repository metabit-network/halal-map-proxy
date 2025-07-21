# Halal Map Proxy

A simple Node.js proxy server to fetch the price of the `AGF_USDT` token from the BitMart API. This is intended to be used as a backend service for a frontend application (such as an Angular app) to securely retrieve token prices without exposing API keys or making direct requests to BitMart from the client.

## Features
- Express server with CORS enabled (default origin: `http://localhost:4200`)
- `/api/bitmart/coin` endpoint returns the latest price for `AGF_USDT` from BitMart
- Environment variable support via `.env` (for BitMart API keys, if needed)

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Setup
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd proxer
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` file:**
   The app expects a `.env` file in the root directory for BitMart API credentials (not currently required for the public price endpoint, but included for future use):
   ```env
   BITMART_API_KEY=your_api_key_here
   BITMART_SECRET=your_secret_here
   ```
   > **Note:** `.env` is gitignored by default.

4. **Start the server:**
   ```bash
   node index.js
   ```
   The server will run on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### `GET /`
Returns a simple greeting to verify the server is running.

### `GET /api/bitmart/coin`
Fetches the latest price for the `AGF_USDT` token from BitMart and returns it as a response.

**Example response:**
```
0.12345
```

## Notes
- CORS is enabled for `http://localhost:4200` by default. Change this in `index.js` if your frontend runs elsewhere.
- The BitMart API keys are loaded from `.env` but are not currently used in the public price endpoint.

## License
MIT

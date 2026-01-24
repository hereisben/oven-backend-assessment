# OVEN Webhook API – Backend Review and Improvements

---

## What this service does

- Accepts webhook requests via HTTP
- Validates incoming request data
- Generates a unique ID for each webhook
- Stores webhook data in memory
- Returns a response to confirm the webhook was received

---

## Tech Stack

- Node.js
- Express
- TypeScript
- Zod (for input validation)

---

## How to run the project

Install dependencies:

```bash
npm install
```

Run the server in development mode:

```bash
npm run dev
```

The server will start on:

```
http://localhost:3000
```

---

## API Endpoints

### Health check

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

---

### Receive webhook

```http
POST /webhooks
```

Request body example:

```json
{
  "source": "test-service",
  "event": "test.event",
  "payload": {
    "example": "data"
  }
}
```

Successful response:

```json
{
  "id": "generated-uuid",
  "message": "Webhook received"
}
```

If the request body is invalid, the API returns `400 Bad Request` with basic error details.

---

## Changes Made

I went through the initial implementation and made a few changes:

- Replaced weak ID generation with `crypto.randomUUID()` to ensure unique webhook IDs.
- Added basic input validation to prevent invalid or missing request data.
- Added centralized error handling to make the API more stable and consistent.

These changes focus on fixing the main issues without adding extra complexity.

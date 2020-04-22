# Wall Clock Time Server

## Required
- Node.js version >= 10

## Setup
1. Install Dependencies: `npm install`
2. Start server on port 3000: `npm start`

## API
- `GET`: `/api/time/?timezone={timezone}` \
  **Description**: Get time by timezone or server's time if timezone is not provided. \
  **Query Parameter**: `{timezone}` is a valid timeZone and is optional. \
  **Return**: `hh:mm:ss` format in `text/html` Content-Type.

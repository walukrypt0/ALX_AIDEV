
# ALX AI-Dev React 19 Features Demo

This project demonstrates new features available in React 19, built inside the ALX AI-Dev environment.

## Features

### 1. Random Quote Generator (`use` hook)

- **File:** `Quote.js`
- **Feature:** This component fetches and displays a random quote from a public API.
- **Latest Tech:** It uses the new `use` hook from React 19 to handle the promise returned by the `fetch` call. This simplifies the code for handling asynchronous operations by allowing us to read the value of a promise directly, and it suspends the component rendering while the data is being fetched. The loading state is handled by the `<Suspense>` component in `App.js`.

### 2. "Like" Button (Server Action)

- **Files:** `LikeButton.js`, `actions.js`
- **Feature:** A button that increments a counter on the server each time it's clicked.
- **Latest Tech:** This feature is built using React Server Actions. The `incrementLike` function in `actions.js` is marked with the `"use server"` directive, allowing it to be called directly from the client-side `LikeButton.js` component. This avoids the need to create a separate API endpoint for this simple interaction.

## How to Run

To run this project, you need a framework that supports React 19 and its Server Components architecture, such as Next.js.

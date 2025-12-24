---
description: Deploy the application to Cloudflare Pages
---

# Deploy to Cloudflare Pages

This workflow will guide you through deploying your Vite React application to Cloudflare Pages.

## Prerequisites

- You must have a Cloudflare account.
- You must have `npm` installed.

## Steps

1.  **Build the Project**
    Ensure the project is built for production.
    ```powershell
    npm run build
    ```

2.  **Deploy with Wrangler**
    Use `wrangler` (Cloudflare's CLI) to deploy the `dist` folder.
    // turbo
    ```powershell
    npx wrangler pages deploy dist
    ```
    *Note: If this is your first time, it will ask you to log in via your browser.*

3.  **Follow the Prompts**
    - Select "Create a new project".
    - Enter a project name (e.g., `ribeye-steakhouse`).
    - Enter the production branch name (usually `main`, or leave blank).

## Updates

To deploy updates, simply run the deploy command again:
```powershell
npm run build
npx wrangler pages deploy dist
```

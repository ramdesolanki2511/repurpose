# Repurpose Studio

An original content-repurposing product UI built with Next.js App Router, React, TypeScript, and CSS. The public website and workspace are an independent demo reconstruction inspired by the content-repurposing product category.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the marketing website and `http://localhost:3000/dashboard` for the interactive workspace.

## Demo behavior

- Workflow creation, activation, pausing, search, and filtering run in the browser and workflow data persists in `localStorage`.
- The login and registration screens only create a local demo session and open the sample workspace. They are not secure authentication.
- Connection dialogs, queue actions, and notifications are UI demonstrations. No social accounts are authorized and no post is sent to a provider.
- Dashboard counts, sample content, publishing activity, and analytics are illustrative demo data.
- Browser-local workflow data can be cleared by removing the `repurpose-studio-workflows` local-storage key.

## Reference limits

REA inspected `https://repurpose.io/` in an isolated Chromium browser. The page returned `403 Forbidden`, so the marketing UI, authenticated application, and responsive behavior could not be visually confirmed. Public product behavior was informed by Repurpose's Help Desk articles, including its [scheduling guide](https://support.repurpose.io/en/article/how-scheduling-works-in-repurpose-setup-and-limits-iyhn5d/) and [supported platform guide](https://support.repurpose.io/en/article/supported-platforms-roles-and-media-types-j22278/). The visual system and inaccessible product states in this project are design assumptions.

## Production integrations

Real users, workspaces, OAuth connections, media storage, video processing, publishing jobs, analytics, billing, and platform adapters are not implemented. A production release needs a backend, provider-approved OAuth applications, secure token storage, queue infrastructure, and platform-specific publishing adapters. The UI intentionally never claims that a simulated post was published.

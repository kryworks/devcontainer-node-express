# Express API DevContainer Setup

This is a minimal Node.js Express API project that I mentioned in my [Developer Experience (DX) Is Culture, Not Just Tooling](https://kryworks.com) article and designed to demonstrate how to use [Dev Containers](https://containers.dev/) for consistent and isolated development environments.

It uses a custom Dockerfile based on the official [devcontainers/javascript-node](https://github.com/devcontainers/images/tree/main/src/javascript-node) image, allowing you to understand how everything works together under the hood.

## Features

- Express API with basic routes
- Nodemon for auto-reloading
- DevContainer support for easy onboarding
- Environment isolation to prevent local pollution
- Ready-to-code experience in **VS Code**

## Getting Started

### 1. Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started/)
- [VS Code](https://code.visualstudio.com/)
- [Dev Containers extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Git](https://git-scm.com/)

### 2. Clone the Repository

```bash
git clone https://github.com/kryworks/devcontainer-node-express.git
cd devcontainer-node-express
```

### 3. Open in Dev Container

In VS Code:

- Open the project folder.
- Press Cmd+Shift+P (or Ctrl+Shift+P on Windows).
- Select Dev Containers: Reopen in Container.

This will:

- Build the container from the included Dockerfile (this may take time, wait patiently 🤓)
- Install dependencies
- Forward port 3001

## Scripts

`npm start` - Start the server

`npm run dev` – Start with nodemon (auto-reload)

## Access the API

Visit it at: http://localhost:3000
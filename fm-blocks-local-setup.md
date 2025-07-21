
# 🧱 FM Blocks – Local Development Setup

This plugin uses modern JavaScript tooling provided by `@wordpress/scripts`, which requires **Node.js v18+**. To avoid conflicts with other projects using older versions of Node.js, we recommend using [`nvm`](https://github.com/nvm-sh/nvm) to manage Node versions on a per-project basis.

## 🛠 Setting up the project

### 1. Install Node.js v18

If not already installed:

```bash
nvm install 18
```

### 2. Set Node v18 for this project only

From the project root:

```bash
echo "18" > .nvmrc
nvm use
```

This ensures that Node v18 is only used in this directory. Other projects can continue using older versions.

### 3. Install dependencies

```bash
rm -rf node_modules package-lock.json
npm install
```

### 4. Build the plugin

To build for production:

```bash
npm run build
```

To build continuously during development:

```bash
npm run start
```

# rn-g-cli

A command-line interface (CLI) tool for generating React Native components and screens with a complete file structure. Create ready-to-use components with separate TypeScript, styles, and types files in seconds!

---

## Overview

**rn-g-cli** lets you quickly scaffold React Native components and screens with best practices built-in. No need to create boilerplate files manually – simply run the command and get a standardized folder structure that includes:

- `index.tsx` – The main component file.
- `styles.ts` – The stylesheet for the component.
- `types.d.ts` – Type definitions for component props.

---

## Features

- **Easy to Use:** Generate components/screens with one command.
- **Custom Folder Structure:** Automatically creates files in a relative folder structure. For example:

  - Running `rn-g-cli g component Header` will generate:

    ```
    src/components/Header/
      ├── index.tsx
      ├── styles.ts
      └── types.d.ts
    ```

  - Running `rn-g-cli g component ui/shared/MyComponent` will generate:

    ```
    src/ui/shared/MyComponent/
      ├── index.tsx
      ├── styles.ts
      └── types.d.ts
    ```

- **Modular Templates:** Easily update or extend file templates by editing the files in the `templates/` folder.
- **Support for Screens:** Use the same command structure to generate screens (rendered under `src/screens` by default).

---

## Installation

### Publish Status

This package is published on NPM and is free to use under the MIT license.

### Global Installation

To install the CLI tool globally on your machine, run:

```bash
npm install -g @avulachandrakanth1/rn-g-cli
```

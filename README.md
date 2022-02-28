<div algin="center">

# Property Helpers

**Simple helper functions for working with properties**

[![GitHub](https://img.shields.io/github/license/RealShadowNova/property-helpers)](https://github.com/RealShadowNova/property-helpersblob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/property-helpers?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/property-helpers)

[![Support Server](https://discord.com/api/guilds/554742955898961930/embed.png?style=banner2)](https://discord.gg/fERY6AenEv)

</div>

---

## Description

Property Helpers is a collection of helper functions for working with properties in objects and arrays.

## Features

- Written in TypeScript
- Offers CommonJS, ESM, and UMD bundles
- Fully tested
- Extremely fast

## Installation

```bash
# npm
npm install property-helpers
# yarn
yarn add property-helpers
```

## Documentation

### deleteProperty

A helper function to delete a property from an object or array at a path.

```typescript
export function deleteProperty<T>(input: unknown, path: string[]): T;
```

---

### getProperty

A helper function to get a property from an object or array at a path.

```typescript
export function getProperty<T>(input: unknown, path: string[]): T | typeof PROPERTY_NOT_FOUND;
```

---

### hasProperty

A helper function to check if an object or array has a property at a path.

```typescript
export function hasProperty(input: unknown, path: string[]): boolean;
```

---

### setProperty

A helper function to set a property on an object or array at a path.

```typescript
export function setProperty<T>(input: unknown, path: string[], value: unknown): T;
```

---

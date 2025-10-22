# OG-Tools AI Agent Instructions

## Project Overview

OG-Tools is a Next.js/React app for OGame players, providing calculators for defense, fleet, energy, and more. The codebase is modular, with each tool organized under `src/app/` and related logic/components in `src/components/`, `src/stores/`, and `src/config/`.

## Architecture & Patterns

- **App Structure:**
  - Pages: `src/app/<tool>/page.tsx` (e.g., `/defenses`, `/ships`, `/energy`, `/ipms`)
  - Components: `src/components/<tool>/...` (UI, helpers, breakdowns, etc.)
  - State: Each tool uses a `zustand` store in `src/stores/<tool>/` (see `useXStore` pattern)
  - Constants: Shared game data in `src/config/constants.ts`
- **UI:**
  - Uses Radix UI, Tailwind CSS, and custom utility wrappers (`cn`, `twMerge`)
  - Common UI primitives in `src/components/ui/` (e.g., `button.tsx`, `card.tsx`, `collapsible.tsx`)
- **Providers:**
  - All tests/components are wrapped with `src/providers/Providers/Providers.tsx` for theme, sidebar, and tooltip context.
- **Testing:**
  - Uses Vitest and React Testing Library. Test setup in `src/setupTests.tsx` and `src/setupTestBeforeEnv.ts`.
  - Use the custom `render`/`renderHook` from `setupTests` for all component/hook tests.
  - Example: `render(<Component />)` auto-wraps with Providers.
- **Routing & Aliases:**
  - Path aliases: `@/` → `src/`, `setupTests` → `src/setupTests.tsx` (see `tsconfig.json`)
  - Next.js routing conventions apply for all `src/app/` pages.

## Developer Workflows

- **Start Dev Server:** `bun run dev` (Next.js with Turbopack)
- **Build:** `bun run build`
- **Lint:** `bun run lint` (ESLint, Prettier integrated)
- **Test:** `bun run test` (Vitest, JSDOM, globals enabled)
- **Format:** `bun run format` (Prettier)
- **Type Check:** `bun run check-types`
- **Upgrade Deps:** `bun run upgrade-dependencies`
- **Clean:** `bun run clean` (node_modules), `bun run clean:build` (.next)

## Project-Specific Conventions

- **State Management:**
  - All calculators use `zustand` stores with a `persist` middleware for local state.
  - Store actions follow the `setX`/`reset` pattern.
- **Component Patterns:**
  - All UI is functional, hooks-based, and uses explicit props typing.
  - "Breakdown" components show calculation details for transparency.
  - "UnderConstructionPage" is used for incomplete features.
- **Styling:**
  - Tailwind CSS is the primary styling method. Use utility classes and `twMerge` for dynamic class composition.
  - Animations use custom classes (see `globals.css` for `.animate-gradient-x`, `.animation-delay-*`).
- **Testing:**
  - All tests are colocated with components, named `*.test.tsx`.
  - Always use the custom `render`/`renderHook` for context-aware tests.
- **Imports:**
  - Use path aliases for all internal imports.
  - Prefer named exports for types and constants.

## Integration & External Dependencies

- **Next.js** for SSR, routing, and static assets.
- **Vite** for test/build tooling (see `vitest.config.ts`).
- **Radix UI** for accessible primitives.
- **Zustand** for state management.
- **Tailwind CSS** for styling.
- **Prettier/ESLint/Commitlint** for code quality.

## Examples

- Add a new calculator: create a new folder in `src/app/`, add a `page.tsx`, and corresponding store/component folders.
- Add a new store: follow the `zustand` pattern in `src/stores/<tool>/<tool>.store.ts`.
- Add a new test: place `*.test.tsx` next to the component, use `render` from `setupTests`.

---

For any unclear conventions or missing patterns, check `README.md`, `src/setupTests.tsx`, or ask for clarification.

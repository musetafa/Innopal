## Goal
Adjust the `EyTunisie` section so it **doesn’t read as Tunisia-only**, while keeping the same overall message (EY Tunisie as a reference actor) and adding a clear statement that delivery covers:
- **Europe de l’Ouest** (regional affiliation)
- **Afrique subsaharienne francophone**
- **Moyen-Orient**

## Current state
- Section file: `src/components/EyTunisie.tsx` (`<section id="eytunisie">`)
- Visual: `TunisiaMap` (dotted Tunisia), which strongly implies Tunisia-only.

## Proposed UX/content change (copy + visual cue)
### 1) Copy adjustment (minimal, same intent)
- Keep the current narrative and paragraphs.
- Add a **short “coverage line”** in the intro block under “EY Tunisie” (or just under the H2), e.g.
  - `Région : Europe de l’Ouest • Delivery : Afrique subsaharienne francophone • Moyen-Orient`
- Optionally tweak the 2nd paragraph to explicitly mention the broader scope (without changing meaning), e.g. add “au-delà de la Tunisie” once.

### 2) Replace the Tunisia map with a broader “Coverage” map
Create a new simple SVG-based component (no external assets) that visually communicates the three zones.

**New component** (suggested): `src/components/RegionCoverageMap.tsx`
- A lightweight SVG illustration (abstract but readable) showing:
  - A highlighted block for **Europe de l’Ouest**
  - A highlighted block for **Moyen-Orient**
  - A highlighted band/area for **Afrique subsaharienne**
- Use the existing gradient colors already present in the site (`#FFE600`, `#FF32FF`, `#32FFFF`) for highlights/strokes.
- Add small labels/legend inside the card (chips or inline legend) so the meaning is explicit even if the map is stylized.

### 3) Wire it into EyTunisie
- In `src/components/EyTunisie.tsx`:
  - Replace `import TunisiaMap from "./TunisiaMap";` with `import RegionCoverageMap from "./RegionCoverageMap";`
  - Replace `<TunisiaMap />` with `<RegionCoverageMap />`

## Files to change
- **Add** `src/components/RegionCoverageMap.tsx`
- **Update** `src/components/EyTunisie.tsx`

## Validation
After implementation:
- Run `npx tsc --noEmit`
- Run `npx vite build`

## Acceptance criteria
- The EyTunisie section explicitly communicates **Europe de l’Ouest** affiliation and delivery coverage for **Afrique subsaharienne francophone** + **Moyen-Orient**.
- The right-side visual no longer looks Tunisia-only; it supports the broader regional message.
- No broken navigation/IDs; `id="eytunisie"` remains unchanged.
- Typecheck and build pass.
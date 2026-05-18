# 🎨 Sovereign Color Manifesto — The Bible of Truth

## 🎯 Purpose

Define every chromatic atom of Nexus UI. This document is the ultimate reference for all brand, functional, and primitive colors.

## 🛑 GOLDEN RULES

1. **HIERARCHY OF USAGE**: Functional Tokens > Primitive Tokens > Palette Mapping.
2. **THEME SYNC**: Every color choice must be validated against both Light and Dark modes.
3. **NO LITERALS**: Hex codes, HSL, or RGB strings are strictly prohibited in component styles.

---

## 💎 1. Primitive Palettes (The Atoms)

All palettes follow the 50-950 scale. Access them via `map.get($color-name, level)` or CSS variables `--nx-[name]-[level]`.

| Palette             | Variable         | Vibe / Purpose                                          |
| :------------------ | :--------------- | :------------------------------------------------------ |
| **Slate**           | `$color-slate`   | Foundation, neutral backgrounds, and high-end neutrals. |
| **Blue**            | `$color-blue`    | Information, secondary actions, links.                  |
| **Danger (Orange)** | `$color-danger`  | Standard danger/destructive actions (Orange-Red tint).  |
| **Red**             | `$color-red`     | System errors, critical alerts, primary brand tint.     |
| **Warning**         | `$color-warning` | Pending states, attention-required alerts.              |
| **Emerald**         | `$color-emerald` | Success, positive confirmations, financial gain.        |
| **Cyan**            | `$color-cyan`    | Secondary brand tint, technical/data visualization.     |
| **Indigo**          | `$color-indigo`  | Tech-heavy sections, documentation highlights.          |
| **Zinc**            | `$color-zinc`    | Neutral alternatives, soft UI elements.                 |

---

## 🏗️ 2. Functional System (The Soul)

These tokens change automatically between **Light** and **Dark** themes.

### Surfaces & Backgrounds

| Token                | Dark Value | Light Value  | Use Case                              |
| :------------------- | :--------- | :----------- | :------------------------------------ |
| `$surface-primary`   | `#000000`  | `$slate-50`  | Main app background (Pure immersion). |
| `$surface-secondary` | `#0a0a0a`  | `#ffffff`    | Cards, sidebars, internal panels.     |
| `$surface-tertiary`  | `#1a1a1a`  | `$slate-100` | Modals, elevated sections, tooltips.  |

### Typography

| Token          | Dark Value    | Light Value   | Use Case                          |
| :------------- | :------------ | :------------ | :-------------------------------- |
| `$text-main`   | `#ffffff`     | `$slate-900`  | Headings and primary copy.        |
| `$text-muted`  | `$slate-400`  | `$slate-500`  | Secondary copy, labels, metadata. |
| `$text-danger` | `$danger-500` | `$danger-600` | Error messages.                   |

### Borders & Lines

| Token             | Dark Value          | Light Value         | Use Case           |
| :---------------- | :------------------ | :------------------ | :----------------- |
| `$border-primary` | `rgba(white, 0.1)`  | `rgba(black, 0.1)`  | Main separators.   |
| `$border-soft`    | `rgba(white, 0.05)` | `rgba(black, 0.05)` | Subtle grid lines. |

---

## ⚡ 3. Tactical Actions & Gradients

Use these for buttons, interactive elements, and status indicators.

### Functional Action Tokens

- **Action Primary**: `$action-primary` (Red 500)
- **Action Danger**: `$action-danger` (Danger 500)
- **Action Success**: `$action-success` (Emerald 500)
- **Action Info**: `$action-info` (Blue 400)
- **Action Warning**: `$action-warning` (Warning 300)

### Sovereign Gradients

| Name              | Variable                                         |
| :---------------- | :----------------------------------------------- |
| **Brand Primary** | `$gradient-primary` (Red 500 -> Red 300)         |
| **Success Glow**  | `$gradient-success` (Emerald 600 -> Emerald 400) |
| **Danger Glow**   | `$gradient-danger` (Danger 600 -> Danger 400)    |
| **Indigo Depth**  | `$gradient-indigo` (Indigo 600 -> Indigo 400)    |

---

## 🛠️ Usage Patterns

### Standard Button Implementation

```scss
@use '@/assets/sass/tokens' as *;

.btn-brand {
  background: $gradient-primary;
  color: $text-on-brand;
  box-shadow: map.get($shadows, 'glow-button-hover');
}
```

### High-Density Data Row

```scss
.data-row {
  background: $surface-secondary;
  border-bottom: 1px solid $border-soft;
  &:hover {
    background: $surface-tertiary;
  }
}
```

## 🛡️ Governance

- **Stability**: MASTER (Immutable)
- **Source**: `src/assets/sass/tokens/_colors.scss`
- **Audit**: Nexus-Sisi Certified

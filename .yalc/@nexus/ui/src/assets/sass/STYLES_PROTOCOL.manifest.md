# 🎨 Sovereign Styles & Tokens Protocol

## 🎯 Purpose
Maintain visual consistency and premium aesthetics across the entire Nexus UI ecosystem. This protocol defines the usage of design tokens (colors, spacing, typography, and atmospheric effects).

---

## 🛑 GOLDEN RULES (Constraints)
1. **NO HARDCODED VALUES**: Never use literal hex codes (`#FFFFFF`), pixels (`16px`), or raw values in SASS/CSS.
2. **TOKEN PRIMACY**: Always use SASS variables from the `@nexus/ui/scss` tokens.
3. **FUNCTIONAL OVER PRIMITIVE**: Prefer functional tokens (e.g., `$surface-primary`) over primitives (e.g., `$color-slate-900`) for component backgrounds.
4. **IMPORT PROTOCOL**: Components MUST import tokens via `@use '@/assets/sass/tokens' as *;` or equivalent modular imports.

---

## 💎 Design Tokens Matrix

### 1. Color System (Functional)
| Token | Use Case | Variable |
| :--- | :--- | :--- |
| **Primary** | Actions & Branding | `$action-primary` |
| **Surface 1** | Main Background | `$surface-primary` |
| **Surface 2** | Cards & Containers | `$surface-secondary` |
| **Text Main** | High Contrast Titles/Body | `$text-main` |
| **Text Muted** | Secondary Info | `$text-muted` |
| **Danger** | Errors & Deletion | `$action-danger` |

### 2. Geometry (Spacing)
Nexus UI uses a **4px grid system**. Spacing tokens are multipliers of 4px.
- **XS**: `$spacing-1` (4px)
- **SM**: `$spacing-2` (8px)
- **MD**: `$spacing-4` (16px) - *Standard for padding/gaps*
- **LG**: `$spacing-6` (24px)
- **XL**: `$spacing-8` (32px)

### 3. Atmosphere (Effects)
| Effect | Token | Description |
| :--- | :--- | :--- |
| **Glass BG** | `$glass-white` | Semi-transparent blur background. |
| **Glass Border** | `$glass-border` | Subtle luminous border (1px solid). |
| **Radius MD** | `map.get($border-radius, 'md')` | Standard rounding (8px). |
| **Shadow Premium**| `$shadow-premium` | Elevated shadow with depth. |

---

## 🛠️ Usage Patterns

### Standard Component Styling
```scss
@use '@/assets/sass/tokens' as *;

.my-component {
  background: $surface-secondary;
  padding: map.get($spacing, '4');
  border: 1px solid $border-primary;
  border-radius: map.get($border-radius, 'md');
  color: $text-main;

  &__muted {
    color: $text-muted;
    font-size: 0.875rem;
  }
}
```

### Premium Glassmorphism
```scss
@use '@/assets/sass/tokens' as *;
@use '@/assets/sass/tokens/blur' as *;

.premium-card {
  background: $glass-bg;
  backdrop-filter: blur(map.get($blur, 'md'));
  border: $glass-border;
  box-shadow: $shadow-premium;
}
```

## 🛡️ Governance State
- **Stability**: STABLE
- **Audit**: Nexus-Sisi Certified
- **AI Priority**: HIGH (Must be read before any CSS/SCSS modification)

# 📏 Sovereign Sizes Manifesto

## 🎯 Purpose

Standardize the dimensional heights and vertical alignment of UI controls (buttons, inputs, selects). Ensures total harmony in forms and data tables.

## 🛑 GOLDEN RULES

1. **VERTICAL ALIGNMENT**: Controls of the same size class MUST have the same height.
2. **SIZE KEYS**: Only use `sm`, `md`, `lg` for component scaling.
3. **PADDINGS OVER HEIGHT**: Prefer using consistent padding with fixed height tokens to ensure text centering.

---

## 💎 Dimensional Scale (Heights)

| Key    | Value  | Description                                        |
| :----- | :----- | :------------------------------------------------- |
| **xs** | `24px` | Micro-controls (mini badges, inline tags).         |
| **sm** | `32px` | Compact UI (tables, densified forms).              |
| **md** | `40px` | **Standard UI** (main forms, primary buttons).     |
| **lg** | `48px` | Large UI (landing pages, high-visibility actions). |
| **xl** | `56px` | Hero UI elements.                                  |

---

## 🛠️ Usage Patterns

### Standard Button Sizing

```scss
@use '@/assets/sass/tokens' as *;

.btn-md {
  height: map.get($sizes, 'height', 'md'); // 40px
  padding: 0 map.get($spacing, '4');
}

.btn-sm {
  height: map.get($sizes, 'height', 'sm'); // 32px
  padding: 0 map.get($spacing, '3');
}
```

## 🛡️ Governance

- **Source**: `_sizes.scss`
- **Audit**: Nexus-Sisi Certified

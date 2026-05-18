# ✍️ Sovereign Typography Manifesto

## 🎯 Purpose

Define the reading hierarchy and typographic personality of Nexus UI. Ensures clarity, legibility, and professional information density.

## 🛑 GOLDEN RULES

1. **FONT FAMILY**: Use the system's primary font (Outfit/Inter). Fallback to sans-serif.
2. **NO INLINE SIZES**: Prohibited to use `font-size: 13px`. Use the `$typography` scale.
3. **WEIGHT DISCIPLINE**: Use official weight tokens (Regular, Medium, Bold). Avoid arbitrary values.

---

## 💎 Typographic Scale

### 1. Font Sizes

Access via `map.get($typography, 'size', 'key')`.

| Key      | Value             | Use Case                          |
| :------- | :---------------- | :-------------------------------- |
| **xs**   | `0.75rem` (12px)  | Captions, small metadata, badges. |
| **sm**   | `0.875rem` (14px) | **Standard body copy**, labels.   |
| **base** | `1rem` (16px)     | Large body copy, input text.      |
| **lg**   | `1.125rem` (18px) | Subheadings, card titles.         |
| **xl**   | `1.25rem` (20px)  | Main component titles.            |
| **2xl**  | `1.5rem` (24px)   | Section headers.                  |
| **3xl**  | `1.875rem` (30px) | Page titles.                      |

### 2. Font Weights

| Key         | Value | Description                          |
| :---------- | :---- | :----------------------------------- |
| **regular** | `400` | Standard body text.                  |
| **medium**  | `500` | Navigation, labels, emphasized text. |
| **bold**    | `700` | Headers, primary buttons.            |

---

## 🛠️ Usage Patterns

### Standard Heading

```scss
@use '@/assets/sass/tokens' as *;

.section-title {
  font-size: map.get($typography, 'size', '2xl');
  font-weight: map.get($typography, 'weight', 'bold');
  line-height: 1.2;
  color: $text-main;
}
```

### Metadata Label

```scss
.meta-text {
  font-size: map.get($typography, 'size', 'xs');
  color: $text-muted;
  letter-spacing: 0.025em;
}
```

## 🛡️ Governance

- **Source**: `_typography.scss`
- **Audit**: Nexus-Sisi Certified

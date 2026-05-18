# 📐 Sovereign Geometry Manifesto — Structural Depth

## 🎯 Purpose
Define the physical laws of Nexus UI. Every pixel must be accounted for within the 4px grid and the official dimensional scale.

## 🛑 GOLDEN RULES
1. **GRID PURITY**: Every dimension (padding, margin, gap, width, height) must be a multiple of 4px.
2. **SCALE ADHERENCE**: Only use keys defined in the `$spacing` and `$border-radius` maps.
3. **RESPONSIVE AWARENESS**: Use geometry tokens that align with the `$breakpoints` system (Mobile, Tablet, Desktop).

---

## 💎 1. Spacing Scale (The Grid)
Based on a **4px base unit**. Access via `map.get($spacing, 'key')`.

| Key | Pixel | Use Case |
| :--- | :--- | :--- |
| **1** | 4px | Micro-adjustments, badge gaps. |
| **2** | 8px | Item spacing, small paddings. |
| **3** | 12px | Compact layout gaps. |
| **4** | 16px | **Standard Padding / Main Gap.** |
| **5** | 20px | Component separation. |
| **6** | 24px | Section inner margins. |
| **8** | 32px | Large section separation. |
| **10** | 40px | Layout-level margins. |
| **12** | 48px | Hero section gaps. |
| **16** | 64px | Page-level top/bottom padding. |

---

## 💎 2. Rounding & Thickness (The Silhouette)

### Border Radius (Rounding)
| Key | Value | Application |
| :--- | :--- | :--- |
| **xs** | `2px` | Subtle sharp elements. |
| **sm** | `4px` | Tags, checkboxes, small buttons. |
| **md** | `8px` | **Standard cards, main buttons, inputs.** |
| **lg** | `12px` | Secondary containers, modals. |
| **xl** | `16px` | Large decorative panels. |
| **2xl**| `24px` | Hero sections, very large modals. |
| **full**| `9999px`| Pills, avatars, switches. |

### Border Width (Thickness)
| Key | Value | Description |
| :--- | :--- | :--- |
| **none** | `0` | No border. |
| **thin** | `1px` | **Standard UI line (Default).** |
| **thick** | `2px` | Stronger separation, focus states. |
| **medium**| `3px` | Heavy decorative borders. |

---

## 💎 3. Responsive Breakpoints
| Device | Breakpoint |
| :--- | :--- |
| **Mobile** | `320px` |
| **Tablet** | `768px` |
| **Desktop** | `1024px` |
| **Wide** | `1440px` |

---

## 🛠️ Usage Patterns

### Complex Card Structure
```scss
@use '@/assets/sass/tokens' as *;

.industrial-card {
  padding: map.get($spacing, '6'); // 24px
  gap: map.get($spacing, '4');     // 16px
  border-radius: map.get($border-radius, 'lg');
  border: map.get($border-width, 'thin') solid $border-primary;
}
```

## 🛡️ Governance
- **Stability**: MASTER
- **Source**: `_spacing.scss`, `_effects.scss`, `_breakpoints.scss`
- **Audit**: Nexus-Sisi Certified

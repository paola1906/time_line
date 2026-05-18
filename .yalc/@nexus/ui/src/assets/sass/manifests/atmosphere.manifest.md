# 🌌 Sovereign Atmosphere Manifesto — Cinematic Finish

## 🎯 Purpose

Enforce the high-end, cinematic look of Nexus UI. Governs depth, light, glassmorphism, and interactive micro-animations.

## 🛑 GOLDEN RULES

1. **GLASS CONSISTENCY**: Always combine `$glass-bg` with `backdrop-filter` and `$glass-border`.
2. **LAYERED SHADOWS**: Shadows must feel natural. Use official levels to build depth.
3. **CINEMATIC MOTION**: Use official transforms for hover states to maintain fluid physics.

---

## 💎 1. Glassmorphism & Blur

The "Crystal" look is achieved through the combination of transparency and light diffraction.

| Effect            | Token / Map            | Description                                    |
| :---------------- | :--------------------- | :--------------------------------------------- |
| **Glass Base**    | `$glass-bg`            | Main semi-transparent fill (Slate 800 at 0.7). |
| **Blur MD**       | `map.get($blur, 'md')` | Standard diffraction (8px).                    |
| **Blur LG**       | `map.get($blur, 'lg')` | Deep immersion blur (16px).                    |
| **Luminous Edge** | `$glass-border`        | Subtle 1px solid white at 0.1 opacity.         |

---

## 💎 2. Depth System (Shadows)

Shadows are calculated to feel like real-world lighting on dark surfaces.

| Level          | Key                      | Use Case                                       |
| :------------- | :----------------------- | :--------------------------------------------- |
| **Small**      | `sm`                     | Buttons, tags, micro-elements.                 |
| **Medium**     | `md`                     | Standard cards and dropdowns.                  |
| **Premium**    | `premium`                | High-elevation panels and modals.              |
| **Glow**       | `glow`                   | **Active focus state** with luminous emission. |
| **Card Hover** | `glow-person-card-hover` | Deep elevation with soft dispersion.           |
| **Btn Hover**  | `glow-button-hover`      | High-contrast action feedback.                 |

---

## 💎 3. Micro-Animations (Transforms)

| Pattern            | Token               | Effect                                     |
| :----------------- | :------------------ | :----------------------------------------- |
| **Card Hover**     | `person-card-hover` | `translateY(-8px)` (Industrial elevation). |
| **Standard Hover** | -                   | `translateY(-2px)` (Subtle feedback).      |

---

## 🛠️ Usage Patterns

### The Sovereign Glass Container

```scss
@use '@/assets/sass/tokens' as *;

.premium-panel {
  background: $glass-bg;
  backdrop-filter: blur(map.get($blur, 'md'));
  border: $glass-border;
  box-shadow: $shadow-premium;
  border-radius: map.get($border-radius, 'xl');
}
```

### Interactive Glow Button

```scss
.btn-sovereign {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: map.get($shadows, 'glow-button-hover');
    transform: translateY(-2px);
  }
}
```

## 🛡️ Governance

- **Stability**: MASTER
- **Source**: `_effects.scss`, `_blur.scss`, `_animations.scss`
- **Audit**: Nexus-Sisi Certified

# 🎬 Sovereign Animations Manifesto

## 🎯 Purpose
Define the temporal dynamics and fluid motion of the system. Ensures every transition feels organic, responsive, and high-end.

## 🛑 GOLDEN RULES
1. **NO CUSTOM TIMINGS**: Use official `$durations` for all transitions.
2. **EASING CONSISTENCY**: Always use `cubic-bezier` curves from the `$easings` map. Avoid `linear` unless for constant motion.
3. **RESPECT REDUCED MOTION**: All animations must comply with accessibility standards.

---

## 💎 Motion Tokens

### 1. Durations (Timing)
| Key | Value | Use Case |
| :--- | :--- | :--- |
| **fast** | `150ms` | Hover states, toggle switches. |
| **base** | `300ms` | **Standard transitions**, component expansion. |
| **slow** | `500ms` | Modal entrance, page-level transitions. |

### 2. Easings (Curves)
| Key | Value | Feel |
| :--- | :--- | :--- |
| **in-out** | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard, smooth start and end. |
| **out** | `cubic-bezier(0, 0, 0.2, 1)` | Fast entrance, natural deceleration. |
| **in** | `cubic-bezier(0.4, 0, 1, 1)` | Steady acceleration for exits. |

---

## 🛠️ Usage Patterns

### Standard Component Transition
```scss
@use '@/assets/sass/tokens' as *;

.card-interactive {
  transition: all map.get($durations, 'base') map.get($easings, 'in-out');
  &:hover {
    background: $surface-tertiary;
  }
}
```

### Sovereign Modal Entrance
```scss
.modal-enter-active {
  transition: opacity map.get($durations, 'slow') map.get($easings, 'out'),
              transform map.get($durations, 'slow') map.get($easings, 'out');
}
```

## 🛡️ Governance
- **Source**: `_animations.scss`
- **Audit**: Nexus-Sisi Certified

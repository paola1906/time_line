# 📱 Sovereign Breakpoints Manifesto

## 🎯 Purpose

Define the adaptive boundaries of Nexus UI. Ensures a consistent experience across all device classes (Mobile, Tablet, Desktop).

## 🛑 GOLDEN RULES

1. **MOBILE FIRST**: Design for the smallest screen first, then scale up using `min-width`.
2. **TOKEN BREAKPOINTS**: Only use values from the official `$breakpoints` map.
3. **NO AD-HOC MEDIA QUERIES**: Prohibited to use custom values like `@media (max-width: 500px)`.

---

## 💎 Responsiveness Grid

| Key     | Value    | Target Device                      |
| :------ | :------- | :--------------------------------- |
| **xs**  | `320px`  | Small Mobile devices.              |
| **sm**  | `480px`  | Large Mobile devices.              |
| **md**  | `768px`  | **Tablets** (Portrait).            |
| **lg**  | `1024px` | **Laptops / Tablets** (Landscape). |
| **xl**  | `1280px` | Desktop Monitors.                  |
| **2xl** | `1440px` | Wide Screen Monitors.              |

---

## 🛠️ Usage Patterns

### Responsive Card Layout

```scss
@use '@/assets/sass/tokens' as *;

.grid-container {
  display: grid;
  grid-template-columns: 1fr; // Mobile default

  @media (min-width: map.get($breakpoints, 'md')) {
    grid-template-columns: repeat(2, 1fr); // Tablet
  }

  @media (min-width: map.get($breakpoints, 'lg')) {
    grid-template-columns: repeat(3, 1fr); // Desktop
  }
}
```

## 🛡️ Governance

- **Source**: `_breakpoints.scss`
- **Audit**: Nexus-Sisi Certified

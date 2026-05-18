# Nexus UI 🪐

> [!IMPORTANT]
> **AI AGENTS / DEVELOPERS**: Before creating or modifying any component, you MUST read and follow the [COMPONENT_PROTOCOL.md](./COMPONENT_PROTOCOL.md). All components must be governed by an English Manifesto. Use the MCP tool `get_component_protocol` to check existing rules.

**Nexus UI** es el sistema de diseño y librería de componentes industrializada para el ecosistema Nexus. Está diseñado para ser altamente modular, permitiendo tanto el consumo como librería externa como su despliegue como una aplicación web de documentación autónoma.

---

## 🚀 Tecnologías Core

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API + Script Setup)
- **Build Tool:** [Vite 8](https://vitejs.dev/) (Build industrial dual)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Estricto)
- **Estilos:** [Sass](https://sass-lang.org/) (Modern Compiler)
- **Estado:** [Pinia](https://pinia.vuejs.org/)
- **Iconos:** [Lucide Vue Next](https://lucide.dev/)

---

## 💎 Componentes Destacados (Industrializados)

Los siguientes componentes han completado su fase de industrialización y son aptos para entornos de producción crítica:

- **NxGitGraph (v2.2.0):** Evolución táctica con **Modo Paneles**, Dark Mode nativo, carga infinita optimizada y soporte de topologías DAG complejas.
- **NxSelectSearch (v2.1.0):** Selector táctico con búsqueda asíncrona y sistema **Smart Chip Overflow** (colapso dinámico de chips).
- **NxGauge:** Sistema de visualización de métricas circulares con soporte para estados críticos y animaciones de alta densidad.

---

## 🏗️ Arquitectura

El proyecto sigue una estructura híbrida de **Atomic Design** y **Featured-Based Architecture**:

```markdown
src/
├── shared/ # Núcleo de la Librería
│ ├── components/ # Atoms, Molecules, Organisms (Reutilizables)
│ ├── common/ # Types, Enums y Modelos globales
│ ├── composables/ # Lógica de Vue compartida (usePrivacy, useNexusApi)
│ ├── services/ # Clientes de API y estándares (NexusClient)
│ └── stores/ # Infraestructura de Pinia genérica
├── features/ # Aplicación de Documentación (Internal "Storybook")
│ └── design-system/# Vistas y rutas para previsualizar componentes
└── assets/ # Design Tokens (Sass variables, mixins)
```

---

## 🛠️ Scripts Disponibles

El proyecto cuenta con un sistema de build dual configurado en `package.json`:

### Desarrollo

- `npm run dev`: Inicia el servidor de desarrollo (visualiza el sistema de diseño interno).

### Distribución (Librería Técnica)

- `npm run build`: Genera la librería modular en `dist/`.
  - **Modular:** Usa `preserveModules` para un Tree Shaking óptimo.
  - **Tipado:** Genera archivos `.d.ts` automáticos.
- **`npm run push`**: (Recomendado) Atalajo industrial que hace el build y lo publica localmente vía **yalc** para pruebas instantáneas en otros proyectos.

### Despliegue (Web App / Docs)

- `npm run build:app`: Genera la web completa de documentación en `dist-web/`.
- `npm run preview`: Previsualiza el build de la aplicación web localmente.

---

## 📦 Uso en otros proyectos (Local)

Para usar Nexus UI en otros proyectos sin publicar en npm, recomendamos el flujo con **yalc**:

1. **En Nexus UI:**
   ```bash
   npm run build
   npx yalc publish
   ```

2. **En tu App Consumidora:**
   ```bash
   npx yalc add @nexus/ui
   ```

### Gestión de Temas (Light / Dark / System)

La librería incluye un sistema de temas robusto basado en Variables CSS y persistencia automática.

#### 1. Inicialización

Para que el tema funcione correctamente, debe inicializarse en el componente raíz (ej. `App.vue`):

```vue
<script setup>
import { useTheme } from '@nexus/ui'
useTheme() // Carga y aplica el tema guardado o el del sistema
</script>
```

#### 2. Uso del Composable

Puedes controlar el tema desde cualquier parte de tu aplicación:

```vue
<script setup>
import { useTheme } from '@nexus/ui'

const { theme, setTheme, toggleTheme } = useTheme()

// Cambiar a un modo específico
const setLight = () => setTheme('light')
const setSystem = () => setTheme('system')
</script>
```

#### 3. NxHeader (Opcional)

El componente `NxHeader` tiene un selector de tema integrado que está oculto por defecto:

```vue
<NxHeader :hide-theme-toggle="false" />
```

#### 4. Personalización vía CSS

Puedes usar las variables CSS del sistema para tus propios estilos:

- `--nx-bg-primary`: Color de fondo principal.
- `--nx-text-main`: Color de texto predominante.
- `--nx-glass-bg`: Fondo para tarjetas o elementos con efecto de desenfoque.

```bash
# Para actualizar cambios:
npm run push
```

---

## 🎨 Consumo de Estilos

Nexus UI ofrece dos formas de importar estilos:

```typescript
// 1. CSS Compilado (Ideal para uso rápido)
import '@nexus/ui/style.css'

// 2. SCSS (Para usar tokens y mixins de diseño)
@use '@nexus/ui/scss' as *;
```

---

## 📋 Compatibilidad

- **Navegadores:** Modernos (ESModules nativos).
- **Node.js:** v20+ recomendado.
- **Vite:** Compatible con Vite 5, 6 y 8.

---

**Desarrollado con ❤️ por Feels Technology**

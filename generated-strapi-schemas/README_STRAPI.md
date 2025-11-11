# Instrucciones para los content-types y componentes Strapi (v5)

Archivos JSON con schemas y componentes para Strapi v5 fueron añadidos en `src/`.

Rutas creadas (para copiar a un proyecto Strapi v5 si es distinto a este repo):

- `src/components/tour/day.json`
- `src/components/tour/activity.json`
- `src/components/tour/place.json`
- `src/components/package/feature.json`

- `src/api/tour/content-types/tour/schema.json`
- `src/api/province/content-types/province/schema.json`
- `src/api/blog-post/content-types/blog-post/schema.json`
- `src/api/package/content-types/package/schema.json`
- `src/api/testimonial/content-types/testimonial/schema.json`
- `src/api/contact-message/content-types/contact-message/schema.json`
- `src/api/category/content-types/category/schema.json`

Seed script de ejemplo:

- `scripts/seed.js` — ejemplo (JavaScript) que usa `strapi.entityService` (se añadió inicialmente).
- `scripts/seed.ts` — ejemplo en TypeScript (recomendado si tu proyecto Strapi usa TypeScript). Este archivo exporta una función `seed(strapi)` que puedes invocar desde el `bootstrap` de Strapi (o adaptar para ejecutar con un script que tenga acceso a la instancia de `strapi`).

Comandos (usar bun en lugar de npm):

```pwsh
bun install
bun run build
bun run develop
```

Cómo usar el seed desde el bootstrap (ejemplo en `src/index.ts` de Strapi usando TypeScript):

```ts
import { seed } from '../../scripts/seed';

export default {
  register({ strapi }: { strapi: any }) {},
  async bootstrap({ strapi }: { strapi: any }) {
    // Descomenta la siguiente línea para ejecutar el seed automáticamente al iniciar Strapi:
    // await seed(strapi);
  }
};
```

Notas:
- Revisa en el Admin UI las relaciones y permisos después de importar los archivos.
- Si tu Strapi tiene plugins o `pluginOptions` personalizados, ajusta los `target` y `collectionName` según convenga.

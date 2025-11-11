/**
 * Example seed helper for Strapi v5 (TypeScript).
 * Usage: copy this into your Strapi project and call from bootstrap, or adapt to run via a script that has access to `strapi` instance.
 * Example (inside src/index.ts bootstrap): await import('../scripts/seed').then(m => m.seed(strapi));
 */

type Strapi = any;

async function ensureProvince(strapi: Strapi, data: { name: string; slug: string; description?: string }) {
  const existing = await strapi.entityService.findMany('api::province.province', { filters: { slug: data.slug } });
  if (existing && existing.length) return existing[0];
  return await strapi.entityService.create('api::province.province', { data });
}

export async function seed(strapi: Strapi): Promise<void> {
  strapi.log?.info?.('Running TypeScript seed script (example)');

  const province = await ensureProvince(strapi, { name: 'Santo Domingo', slug: 'santo-domingo', description: 'Provincia ejemplo' });

  // Create a sample package
  const packageItem = await strapi.entityService.create('api::package.package', {
    data: {
      name: 'Standard',
      slug: 'standard',
      price: 59,
      featured: true,
      features: [ { text: 'Transporte' }, { text: 'Guía' } ]
    }
  });

  // Create a sample tour
  const tour = await strapi.entityService.create('api::tour.tour', {
    data: {
      title: 'Colonial Vibes - Santo Domingo',
      slug: 'colonial-vibes-santo-domingo',
      short_description: 'Historic and cultural tour of the Colonial Zone.',
      description: '<p>Detail here...</p>',
      price: 59,
      duration: '1 day',
      province: province.id,
      packages: [packageItem.id]
    }
  });

  // Create a sample blog post
  await strapi.entityService.create('api::blog-post.blog-post', {
    data: {
      title: 'Bienvenidos a Santo Domingo',
      slug: 'bienvenidos-santo-domingo',
      excerpt: 'Una breve introducción...',
      content: '<p>Contenido de ejemplo</p>',
      date: new Date().toISOString().slice(0,10)
    }
  });

  // Create sample testimonial
  await strapi.entityService.create('api::testimonial.testimonial', {
    data: {
      quote: 'Excelente experiencia con guías profesionales.',
      author: 'María Pérez',
      location: 'Santo Domingo',
      rating: 5,
      related_tour: tour.id
    }
  });

  // Create a sample contact message
  await strapi.entityService.create('api::contact-message.contact-message', {
    data: {
      name: 'Cliente Ejemplo',
      email: 'cliente@example.com',
      phone: '+1 809 555 0101',
      subject: 'Consulta sobre disponibilidad',
      message: '¿Hay disponibilidad para 4 personas el próximo sábado?'
    }
  });

  strapi.log?.info?.('TypeScript seed script finished');
}

export default seed;

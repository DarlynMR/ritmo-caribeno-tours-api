/**
 * Example seed helper for Strapi v5.
 * Usage: copy this into your Strapi project and call from bootstrap, or adapt to run via a script that has access to `strapi` instance.
 * Example (inside src/index.js bootstrap): await require('../../scripts/seed').seed(strapi);
 */

async function ensureProvince(strapi, data) {
  const existing = await strapi.entityService.findMany('api::province.province', { filters: { slug: data.slug } });
  if (existing && existing.length) return existing[0];
  return await strapi.entityService.create('api::province.province', { data });
}

async function seed(strapi) {
  strapi.log.info('Running seed script (example)');

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

  strapi.log.info('Seed script finished');
}

module.exports = { seed };

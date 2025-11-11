import type { Core } from "@strapi/strapi";

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const { data, meta } = await strapi.service("api::testimonial.testimonial").find(ctx.query);
    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.service("api::testimonial.testimonial").findOne(id, ctx.query);
    return { data: entity };
  },
});

export default controller;

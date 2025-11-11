import type { Core } from "@strapi/strapi";

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const { data, meta } = await strapi.service("api::category.category").find(ctx.query);
    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.service("api::category.category").findOne(id, ctx.query);
    return { data: entity };
  },
});

export default controller;

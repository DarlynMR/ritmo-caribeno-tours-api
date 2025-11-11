import type { Core } from "@strapi/strapi";

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async create(ctx) {
    const entity = await strapi.service("api::contact-message.contact-message").create(ctx.request.body);
    return { data: entity };
  },

  async find(ctx) {
    const { data, meta } = await strapi.service("api::contact-message.contact-message").find(ctx.query);
    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.service("api::contact-message.contact-message").findOne(id, ctx.query);
    return { data: entity };
  },
});

export default controller;

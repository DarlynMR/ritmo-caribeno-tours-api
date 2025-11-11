import type { Core } from "@strapi/strapi";

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async create(data: any) {
    return await strapi.entityService.create("api::contact-message.contact-message", {
      data,
    });
  },

  async find(query: any) {
    return await strapi.entityService.findMany("api::contact-message.contact-message", {
      ...query,
    });
  },

  async findOne(id: string | number, query: any) {
    return await strapi.entityService.findOne("api::contact-message.contact-message", id, {
      ...query,
    });
  },
});

export default service;

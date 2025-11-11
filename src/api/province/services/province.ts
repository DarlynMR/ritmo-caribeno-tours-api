import type { Core } from "@strapi/strapi";

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(query: any) {
    return await strapi.entityService.findMany("api::province.province", {
      ...query,
    });
  },

  async findOne(id: string | number, query: any) {
    return await strapi.entityService.findOne("api::province.province", id, {
      ...query,
    });
  },
});

export default service;

import type { Core } from "@strapi/strapi";

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(query: any) {
    return await strapi.entityService.findMany("api::category.category", {
      ...query,
    });
  },

  async findOne(id: string | number, query: any) {
    return await strapi.entityService.findOne("api::category.category", id, {
      ...query,
    });
  },
});

export default service;

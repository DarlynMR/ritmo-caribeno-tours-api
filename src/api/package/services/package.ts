import type { Core } from "@strapi/strapi";

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(query: any) {
    return await strapi.entityService.findMany("api::package.package", {
      ...query,
    });
  },

  async findOne(id: string | number, query: any) {
    return await strapi.entityService.findOne("api::package.package", id, {
      ...query,
    });
  },
});

export default service;

import type { Core } from "@strapi/strapi";

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(query: any) {
    return await strapi.entityService.findMany("api::blog-post.blog-post", {
      ...query,
    });
  },

  async findOne(id: string | number, query: any) {
    return await strapi.entityService.findOne("api::blog-post.blog-post", id, {
      ...query,
    });
  },
});

export default service;

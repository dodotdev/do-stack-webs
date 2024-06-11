import fp from "fastify-plugin";
import { jsonResponse } from "@pkg/utils";

export default fp(async (fastify) => {
  fastify.decorate<typeof jsonResponse>("jsonResponse", jsonResponse);
});

declare module "fastify" {
  export interface FastifyInstance {
    jsonResponse: typeof jsonResponse;
  }
}

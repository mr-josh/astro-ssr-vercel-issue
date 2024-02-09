import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ locals }, next) => {
  locals.timezone = "Australia/Sydney";

  return await next();
});

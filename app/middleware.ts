import { default as nextAuthMiddleware } from 'next-auth/middleware'

export default nextAuthMiddleware

export const config = {
  matchers: [/^\/dashboard/],
}
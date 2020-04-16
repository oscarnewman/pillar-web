const prod = process.env.NODE_ENV === 'production'

const env = {
  FB_CLIENT_ID: prod ? '1684207668378168' : '2173405042756743',
  API_URL: prod ? 'https://api.pillar.gives/graphql' : 'http://localhost:8000',
  BASE_URL: prod ? 'https://pillar.gives' : 'http://localhost:3000',
  STRIPE_KEY: prod
    ? 'pk_live_3jLMLDZZo9MhvOMvWl6U7tnJ'
    : 'pk_test_Aa9HCt6t96ix37gxvpeqOKYL',
  STRIPE_SUBSCRIPTION_KEY: prod ? 'plan_G8ZcSSLAUYXeVl' : 'plan_G8LgYuCMldDhkf',
  GHOST_URL: 'http://localhost:2368',
  GHOST_KEY: 'b2f5dae21899db1f2303697ef5',
}

module.exports = {
  target: 'serverless',
  env,
}

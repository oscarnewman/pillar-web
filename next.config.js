const prod = process.env.NODE_ENV === 'production'

const env = {
  FB_CLIENT_ID: prod ? '1684207668378168' : '2173405042756743',
  API_URL: prod ? 'https://api.pillar.gives' : 'http://localhost:8000',
  GQL_URL: prod
    ? 'https://api.pillar.gives/graphql'
    : 'http://localhost:8000/graphql',
  BASE_URL: prod ? 'https://pillar.gives' : 'https://localhost:3000',
  STRIPE_KEY: prod
    ? 'pk_live_3jLMLDZZo9MhvOMvWl6U7tnJ'
    : 'pk_test_Aa9HCt6t96ix37gxvpeqOKYL',
  STRIPE_SUBSCRIPTION_KEY: prod ? 'plan_G8ZcSSLAUYXeVl' : 'plan_G8LgYuCMldDhkf',
  GHOST_URL: 'http://ghost.pillar.gives',
  GHOST_KEY: 'c05e68c086256cb8e699a981b8',
}

module.exports = {
  target: 'serverless',
  env,
}

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './src/**/*.tsx',
              './src/**/*.ts',
              './src/**/*.jsx',
              './src/**/*.js',
            ],
            // make sure css reset isnt removed on html and body
            whitelist: ['html', 'body'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            rejected: true,
          },
        }
      : {}),
  },
}

module.exports = ({ env }) => ({
  host: env('HOST', '3.94.62.106'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});


const mock = require('mockjs');

module.exports = {
  // Ref: https://docs.svrx.io/en/plugin/contribution.html#schema
  configSchema: { },

  hooks: {
    // Ref: https://docs.svrx.io/en/plugin/contribution.html#server
    async onCreate({ router }) {
      // TODO
      router.action('mock', (schema) => (ctx) => {
        ctx.body = mock.mock(schema);
      });
      return () => {
        // fire onDestory
      };
    },
  },
};

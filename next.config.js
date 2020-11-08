const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        BASE_URL: process.env.DEV_BASE_URL
      }
    };
  }

  return {
    env: {
      BASE_URL: process.env.BASE_URL
    }
  };
};

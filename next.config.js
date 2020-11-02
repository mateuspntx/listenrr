const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        BASE_URL: 'localhost'
      }
    };
  }

  return {
    env: {
      BASE_URL: 'listenrr.ml'
    }
  };
};

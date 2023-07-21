const config = require('./babel.config.base');

module.exports = {
  ...config,
  babelrcRoots: ['.', 'packages/**/*', 'packages/*', ],
  sourceType: 'unambiguous',
};

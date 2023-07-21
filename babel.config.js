const config = require('./babel.config.base');

module.exports = {
  ...config,
  babelrcRoots: ['.', 'packages/**/*', 'packages/*', 'units/**/packages/**/*'],
  sourceType: 'unambiguous',
};

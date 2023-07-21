const basePreset = ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'];

module.exports = {
  presets: basePreset,
  overrides: [
    {
      test: /\.ts$/,
      plugins: [['@babel/plugin-transform-typescript', { isTSX: false }]],
    },
    {
      test: /\.tsx$/,
      plugins: [['@babel/plugin-transform-typescript', { isTSX: true }]],
    },
    {
      test: /\.[jt]sx?$/,
      plugins: [
        ['@babel/plugin-proposal-class-properties'],
        ['@babel/plugin-proposal-private-methods'],
      ],
    },
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};

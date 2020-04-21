module.exports = {
  plugins: ['@babel/plugin-transform-modules-commonjs'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10',
          ie: '11',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
}

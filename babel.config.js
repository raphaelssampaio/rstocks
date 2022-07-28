module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@router': './src/router',
        }
      }
    ],
    'react-native-reanimated/plugin'
  ],
  presets: ['module:metro-react-native-babel-preset']
}

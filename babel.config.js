module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      // 'module:metro-react-native-babel-preset',
      ['babel-preset-expo',],
      
    ],
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       alias: {
    //         crypto: 'react-native-quick-crypto',
    //         stream: 'readable-stream',
    //         buffer: '@craftzdog/react-native-buffer',
    //       },
    //     },
    //   ],
    // ],
  }
}

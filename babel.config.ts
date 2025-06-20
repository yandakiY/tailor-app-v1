module.exports = function(api: { cache: (arg0: boolean) => void; }) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'react-native-vector-icons': '@expo/vector-icons',
          },
        },
      ],
      // autres plugins...
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};

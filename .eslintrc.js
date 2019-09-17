module.exports = {
  extends: ['wolox-react'],
  settings: {
    'react': {
      'version': '^16.9.0'
    },
    'import/resolver': {
      'babel-module': {
        alias: {
          '~components': './src/app/components',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils'
        }
      }
    }
   }
};

// https://docs.expo.dev/guides/using-eslint/



const config = {
  extends: baseConfig.extends.concat(['expo']),
  rules: {
    ...baseConfig.rules,
    // somehow these rules are not available
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-wrapper-object-types': 'off',
    // import plugin doesn't work with typescript 5.6.3 on files that import from native code - rollback to 5.3.3 would be required
    // error  Resolve error: typescript with invalid interface loaded as resolver
    'import/namespace': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/no-self-import': 'off',
    'import/no-cycle': 'off',
    'import/no-duplicates': 'off',
    'import/order': 'off',
    'import/no-relative-packages': 'off',
    // doesn't concern us
    'require-extensions/require-extensions': 'off',
    // void needed to have dangling promises
    'no-void': 'off',
    // requires are recommended for images
    '@typescript-eslint/no-var-requires': 'off',
    'global-require': 'off',
    // redux and reduce mutate
    'functional/immutable-data': 'off',
    // redux-toolkit patterns modify parameters of argument
    'no-param-reassign': 'off',
    // disable naming convention rule
    '@typescript-eslint/naming-convention': 'off',
  },
  ignorePatterns: [
    'ios',
    'android',
    'node_modules',
    'web',
    '.eslintrc.js',
    'reset-project.js',
    'babel.config.js',
    'jest.config.js',
    'expo-env.d.ts',
    'scripts',
    'shim.js',
    'tailwind.config.js',
    'metro.config.js',
    'android-manifest-plugin.js',
    'strings-resource-plugin.js',
    'android-debug-manifest-plugin.js',
  ],
}

module.exports = config

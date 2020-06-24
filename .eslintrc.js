module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'always'],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'any',
        normal: 'any',
      },
    }],
    'vue/attribute-hyphenation': ['error', 'never'],
  },
};

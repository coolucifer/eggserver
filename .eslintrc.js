module.exports = {
  extends: "airbnb-base",
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-plusplus': [
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
      { allowForLoopAfterthoughts: true },
    ],
    'arrow-parens': [
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'as-needed',
    ],
    'max-len': ['warn', 200],
    'linebreak-style': ["off", "windows"],
    'no-underscore-dangle': ["off"],
  },
};
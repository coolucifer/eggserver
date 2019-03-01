module.exports = {
  extends: "airbnb-base",
  rules: {
    'arrow-parens': [
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'as-needed',
    ],
  }
};
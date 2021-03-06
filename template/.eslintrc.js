// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  globals: {
    '$'    : true,
    '_'    : true,
    'utils': true,
    'opts' : true,
    'vue'  : true,
    'M'    : true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Allow alignment
    'no-multi-spaces': [2, { exceptions: { "AssignmentExpression": true, "VariableDeclarator": true, "ImportDeclaration": true}}],
    'key-spacing': [1, {"align": "colon"}],
    'camelcase': [1, {properties: "always"}]
  }
}

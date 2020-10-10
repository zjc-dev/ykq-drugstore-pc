module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "arrow-parens": 0, // 箭头函数用小括号括起来
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],  // vue将标签渲染为原生html标签时，由于这些标签是自闭合的，所以禁止end标签报错
    "no-undef": "off" // 对未声明变量使用的警告
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

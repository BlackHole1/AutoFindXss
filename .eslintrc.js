module.exports = {
  parser: "typescript-eslint-parser",
  globals: {
    "Identifier": false
  },
  plugins: [
    "typescript",
    "import",
  ],
  rules: {
    "eqeqeq": [ "error", "always", { null: "ignore" } ],  // 使用 === 或 !==，禁止使用 == 或 !=，与 null、undefined 比较时除外
    "typescript/class-name-casing": "error",  // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    "no-dupe-keys": "error",  // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": "error",  // 禁止重复的 case 标签
    "no-extra-parens": 0,  // 禁止不必要的括号
    "no-unreachable": "error",  // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    "guard-for-in": "error",  // 要求 for-in 循环中有一个 if 语句
    "no-eval": "error",  // 禁用 eval()
    "no-with": "error",  // 禁用 with 语句
    "no-undef-init": "error",  // 禁止将变量初始化为 undefined
    "comma-spacing": [ "error", { "before":false,"after":true } ],  // 控制逗号前后的空格
    "array-bracket-spacing": [ "error", "always" ],  // 数组之间需要带空格
    "max-len": [ 1, 150 ],  // 强制一行的最大长度
    "no-trailing-spaces": "error",  // 禁用行尾空格
    "semi": [ "error", "always" ], // 强制使用分号
    "no-regex-spaces": "error",  // 禁止正则表达式字面量中出现多个空格
    "no-return-await": "error",  // 禁用不必要的 return await
    "require-await": "error",  // 禁止使用不带 await 表达式的 async 函数
    "camelcase": "error",  // 使用骆驼拼写法
    "no-const-assign": "error",  // 不允许改变用const声明的变量
    "no-duplicate-imports": "error",  // 禁止重复模块导入
    "prefer-const": [ "error", { "destructuring": "all", } ], //优先使用const
  }
};

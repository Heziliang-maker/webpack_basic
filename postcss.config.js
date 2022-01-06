/*
 * @Date: 2022-01-06
 * @Description: postcss config
 */

module.exports = {
  //一般会使用另外一个插件 postcss-preset-env 其中内置了autoprefixer
  plugins: [require("postcss-preset-env")],
};

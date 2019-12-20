console.log ('env', process.env.mode);
let isDev = process.env.mode === 'dev';

module.exports = {
  lintOnSave: false,
  // publicPath:'./'
  publicPath: isDev ? './' : '/vue-components/',
};

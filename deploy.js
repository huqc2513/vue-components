const shell = require ('shelljs');
const argv = require ('yargs').argv;
const colors = require('colors-console')

const commit = argv._[0];

const log = (color,text)=>{
  console.log(colors(color,text))
}

log('cyan', '部署脚本开始执行')


if (shell.exec ('npm run build').code !== 0) {
  log('red', '打包出现错误')
  shell.exit (1);
} else {
  log('green', '打包成功，执行部署命令')

  shell.exec (`git pull`);
  shell.exec ('git add .');
  shell.exec (`git commit -m "${commit}"`);

  if (shell.exec ('git push -u o master').code !== 0) {
    log('red', '推送失败')
    shell.exit (1);
  }

  if (shell.exec ('git push -u github master').code !== 0) {
    log('red', '推送失败')
    shell.exit (1);
  }

}


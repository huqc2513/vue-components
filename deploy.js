const shell = require ('shelljs');
const argv = require ('yargs').argv;

const commit = argv._[0];
console.log('c',commit)

if (shell.exec ('npm run build').code !== 0) {
  shell.echo ('打包出现错误');
  shell.exit (1);
} else {
  shell.exec (`git pull`);
  shell.exec ('git add .');
  shell.exec (`git commit -m "${commit}"`);

  if (shell.exec ('git push -u o master').code !== 0) {
    shell.echo ('Error: Git push failed');
    shell.exit (1);
  }

  if (shell.exec ('git push -u github master').code !== 0) {
    shell.echo ('Error: Git push failed');
    shell.exit (1);
  }
}

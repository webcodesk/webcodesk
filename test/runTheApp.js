const forever = require('forever-monitor');

const child = new forever.Monitor('./test/start.js', {
  max: 1,
  silent: false,
  args: [],
  command: 'node_modules/.bin/babel-node',
});

child.on('stdout', data => {
  console.info('STDOUT: ', JSON.stringify(data));
  if (data.data) {
    console.info('STDOUT: ', data.data);
  }
});

child.on('stderr', data => {
  // console.info('STDERR: ', JSON.stringify(data, null, 4));
  if (data.data) {
    console.info('STDERR: ', data.data);
  }
});

child.on('exit', () => {
  console.info('start.js has exited after 1 restarts');
});

setTimeout(() => {
  child.stop();
}, 10000);

child.start();

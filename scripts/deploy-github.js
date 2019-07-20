// eslint-disable-next-line import/no-extraneous-dependencies
const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/Coffeegerm/coffegerm.github.io.git'
  },
  () => {
    console.log('Deploy Complete!');
  }
);

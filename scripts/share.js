const ghpages = require('gh-pages');
const build = require('./dist');

build();

console.log('📡 Publishing to GitHub...');
ghpages.publish('./dist', error => {
  if (error) throw error;
  console.log('🎉 Published!');
});
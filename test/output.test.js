const assert = require('assert');
const fs = require('fs');
const path = require('path');

const delay = time => new Promise((resolve) => {
  setTimeout(resolve, time);
});

describe('first build', () => {
  it('should create a.js', async () => {
    await delay(2000);
    assert.equal(fs.existsSync(path.resolve(__dirname, './build/a.js')), true);
  });
  it('should create b.js', async () => {
    await delay(2000);
    assert.equal(fs.existsSync(path.resolve(__dirname, './build/b/b.js')), true);
  });
});

describe('dynamic entry', () => {
  it('should create c.js', async () => {
    fs.writeFileSync(path.resolve(__dirname, './src/c.js'), 'console.log(1)');
    await delay(2000);
    assert.equal(fs.existsSync(path.resolve(__dirname, './build/c.js')), true);
  });
});


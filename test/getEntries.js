const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const getEntries = async (file, list = []) => {
  const stats = await stat(file);
  if (stats.isFile()) {
    return list.concat(file);
  }
  const subFiles = await readdir(file);
  const files = await Promise.all(subFiles.map(f => getEntries(path.join(file, f))));
  return list.concat(...files);
};

module.exports = getEntries;

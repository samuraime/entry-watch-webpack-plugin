/**
 * EntryWatchWebpackPlugin
 */
class EntryWatchWebpackPlugin {
  /**
   * @param {String|String[]} 需要watch的目录
   */
  constructor(directory) {
    this.directories = Array.isArray(directory) ? directory : [directory];
  }

  apply(compiler) {
    compiler.hooks.afterCompile.tapAsync(this.constructor.name, (compilation, callback) => {
      this.directories.forEach((dir) => {
        compilation.contextDependencies.add(dir);
      });
      callback();
    });
  }
}

module.exports = EntryWatchWebpackPlugin;

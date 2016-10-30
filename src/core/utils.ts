/// <reference path='../../typings/index.d.ts' />
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

class Utils {

  public abspath;

  static create() {
    return new Utils();
  }

  log(msg) {
    console.log(chalk.bgBlack.yellow('RPM > ') + chalk.stripColor(' ') + msg);
  }

  logError(err) {
    console.log(err);
  }

  isDefined(value) {
    if (value === void 0) {
      return false;
    }
    return true;
  }

  getAbsPath() {
    return process.cwd();
  }

  fileExists(file) {
    try {
      if (fs.lstatSync(path.resolve(this.abspath, `${file}.js`)).isFile()) {
        return true;
      }
    }
    catch (e) {
      this.logError(e);
      return false;
    }
  }

}

module.exports = Utils.create();
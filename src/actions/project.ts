/// <reference path='../../typings/index.d.ts' />
const Git         = require('nodegit');
const dbService   = require('../core/db');
const u           = require('../core/utils');
const path        = require('path');
const fs          = require('fs-extra')

class Project{
  constructor() {

  }

  create() {
    let gitOrigin = dbService.db.get('git.origin').value();
    let gitDest = path.resolve(u.processpath, dbService.db.get('clone.prefix').value());
    u.log('project > create');
    u.log(`clone: ${gitOrigin}`);
    u.log(`into: ${gitDest}`)

    // clean dir if exists
    // git requires empty folder
    fs.removeSync(path.resolve(gitDest));

    // clone git repo
    Git.Clone(gitOrigin, gitDest, {
      fetchOpts: {
        callbacks: {
          credentials: function(url, userName) {
            let cred = Git.Cred.userpassPlaintextNew(
              dbService.db.get('git.credentials.username').value(),
              dbService.db.get('git.credentials.password').value());
            return cred;
          }
        }
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
}



module.exports = new Project();
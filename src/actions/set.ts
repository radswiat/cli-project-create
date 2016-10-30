/// <reference path='../../typings/index.d.ts' />
const dbService = require('../core/db');
const chalk     = require('chalk');
const u         = require('../core/utils');


class Set{

    /**
     * Action, origin
     * Set git origin
     */
    origin(val) {
        dbService.db.set('git.origin', val).value();
        u.log(chalk.bgGreen('Origin changed:') + ' ' + val);
    }

    credentials(username, password) {
        dbService.db.set('git.credentials', {
            username : username,
            password : password
        }).value();
        u.log(chalk.bgGreen('Credentials changed:') + ' ' + username + ' ********* ');
    }
}



module.exports = new Set();
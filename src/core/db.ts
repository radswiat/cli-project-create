/// <reference path='../../typings/index.d.ts' />
const low   = require('lowdb');
const path  = require('path');
const u     = require('./utils');
const cfg   = require('../config');
const chalk = require('chalk');

class DbService{

    private db;

    constructor() {
        this.db = low(path.resolve(u.abspath, 'db.json'));
        if(!u.isDefined(this.db.get('git').value())){
            u.log(chalk.green('Default settings applied'));
            this.db.defaults(cfg).value();
        }
    }

    static create() {
        return new DbService();
    }

}



module.exports = DbService.create();
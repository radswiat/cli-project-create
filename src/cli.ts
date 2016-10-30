#! /usr/bin/env node
/// <reference path='../typings/index.d.ts' />
const chalk     = require('chalk');
const u         = require('./core/utils');
const cmd   = {
    action  : process.argv[2],
    arg     : process.argv[3],
    val1    : process.argv[4],
    val2    : process.argv[5]
}
const actionPath= `./actions/${cmd.action}`;


/**
 * Let's set some basic paths
 */
u.processpath   = process.cwd();
u.abspath       = __dirname;


u.log(chalk.bgYellow.black(` RPM action: ${cmd.action} > ${cmd.arg} `))

if(u.fileExists(actionPath)) {
    require(actionPath)[cmd.arg](cmd.val1, cmd.val2);
}else{
    u.log(chalk.bgRed.white(` Action: ${cmd} does not exist `))
}


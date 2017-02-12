#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'season',
    describe: 'Fetch a Diablo 3 season',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            type: 'number',
          },
          leaderboard: {
            alias: 'b',
            type: 'string',
          },
          token: {
            alias: 't',
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => logger('d3', 'season', argv),
  }).argv;

module.exports = request;

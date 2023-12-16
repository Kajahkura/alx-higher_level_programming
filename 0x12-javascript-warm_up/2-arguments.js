#!/usr/bin/node
/*
 * Command line argument passing
 */

const commandArg = process.argv.length - 2;

if (commandArg === 0) {
  console.log('No argument');
} else if (commandArg === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}

#!/usr/bin/node

const [,, firstArgument] = process.argv;

if (firstArgument) {
  console.log(firstArgument);
} else {
  console.log('No argument');
}

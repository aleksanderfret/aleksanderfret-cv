// eslint-disable-next-line import/no-extraneous-dependencies
const { normalize } = require('path');

const fs = require('fs-extra');

const cliArguments = process.argv.slice(2);
const sourcePath = cliArguments[0];
const targetPath = cliArguments[1];
const blackList = cliArguments[2];

const checkIfContainsFile = paths => file => {
  if (Array.isArray(paths)) {
    return paths.some(path => normalize(path) !== normalize(file));
  }

  if (typeof paths === 'string') {
    return normalize(paths) !== normalize(file);
  }

  throw new Error(
    "The 'paths' parameter should be type of string or an array."
  );
};

const copyFolder = omitFiles => (source, target) =>
  fs.copySync(source, target, {
    dereference: true,
    filter: omitFiles
  });

const checkIfForbiddenFile = checkIfContainsFile(blackList);
const copyFolderWithFilter = copyFolder(checkIfForbiddenFile);

try {
  copyFolderWithFilter(sourcePath, targetPath);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error.message);
}

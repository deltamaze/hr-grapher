/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const garminParser = require('./services/parse/garmin/garminParser');

const configuration = JSON.parse(fs.readFileSync(path.resolve(__dirname, './appConfig.json')));


console.log('Begin Looping through files');

const unParsedFiles = [];

fs.readdir(path.resolve(__dirname, configuration.rawPath), (err, files) => {
  // handling error
  if (err) {
    console.log(`ERROR: Unable to scan directory: ${err}`);
    return;
  }
  // listing all files using forEach
  files.forEach((file) => {
    // Do whatever you want to do with the file
    if (file.includes('garmin')) {
      console.log(file);
      // eslint-disable-next-line new-cap
      unParsedFiles.push(new garminParser(file,
        configuration.rawPath,
        configuration.parsedPath,
        __dirname));
    }
  }); // end loop through files / add to unParsedFiles array

  unParsedFiles.forEach((file) => {
    file.parse();
  });// end parse
}); // end readdir

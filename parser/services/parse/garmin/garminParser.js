const fs = require('fs');
const path = require('path');
const parser = require('../parser');

class garminParser extends parser {
  // raw garmin pulled
  // https://connect.garmin.com/modern/proxy/activity-service/activity/[ActivityId]/details?maxChartSize=2000&maxPol....

  parse() {
    const parsedData = []; // single array, key = second, value = HR
    // eslint-disable-next-line no-console
    const rawData = JSON.parse(
      fs.readFileSync(
        path.resolve(this.baseDir, this.rawRelativePath, this.fileName)
      )
    );
    for (let index = 0; index < rawData.activityDetailMetrics.length; index += 1) {
      parsedData.push(rawData.activityDetailMetrics[index].metrics[5]);
    }

    // saved parsed data
    fs.writeFileSync(
      path.resolve(this.baseDir, this.parsedRelativePath, this.fileName),
      JSON.stringify(parsedData)
    );
  }
}

module.exports = garminParser;

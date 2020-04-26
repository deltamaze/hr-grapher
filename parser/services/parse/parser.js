
class parser {
  constructor(fileName, rawRelativePath, parsedRelativePath, baseDir) {
    this.fileName = fileName;
    this.rawRelativePath = rawRelativePath;
    this.parsedRelativePath = parsedRelativePath;
    this.baseDir = baseDir;
  }

  // eslint-disable-next-line class-methods-use-this
  parse() {
    throw new TypeError('Must override method');
  }
}

module.exports = parser;

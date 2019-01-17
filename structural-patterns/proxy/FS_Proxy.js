class FS_Proxy {
  constructor(fsSubject) {
    this.fs = fsSubject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files.`));
    }

    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.log(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
}

module.exports = FS_Proxy;

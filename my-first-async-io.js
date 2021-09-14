const fs = require("fs");

fs.readFile(process.argv[2], function (err, buf) {
  const str = buf.toString();
  const tab = str.split("\n");

  console.log(tab.length - 1);
});

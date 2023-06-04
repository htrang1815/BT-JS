function readFile(file, params) {
  const fs = require("fs");
  const path = require("path");

  const filePath = path.join(__dirname, "input.txt");
  const fileOutput = path.join(__dirname, "output.txt");

  const printFile = (html, paramHtml) => {
    let htmlReplaceStr = html;
    const keys = Object.keys(paramHtml);
    for (const key of keys) {
      const placeholder = `{{${key}}}`;
      const regex = new RegExp(placeholder, "g");
      htmlReplaceStr = htmlReplaceStr.replace(regex, paramHtml[key]);
    }

    fs.writeFile(fileOutput, htmlReplaceStr, (err) => {
      if (err) {
        console.error("Lỗi khi ghi tệp tin:", err);
        return;
      }

      console.log("Tệp tin đã được ghi thành công!");
    });
  };

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Lỗi khi đọc tệp tin:", err);
      return;
    }
    if (data) {
      printFile(data, params);
    }
  });
}

readFile("input.txt", {name: 'Trang'});
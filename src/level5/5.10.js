function templateString(file, params) {
  const fs = require("fs");
  const path = require("path");

  const filePath = path.join(__dirname, file);

  const printFile = (html, paramHtml) => {
    const fileOutput = path.join(__dirname, `template${file}`);
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

// module.exports = templateString;

templateString("input.txt", { name: "Trang" });

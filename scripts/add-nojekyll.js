// scripts/add-nojekyll.js
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "out", ".nojekyll");

fs.writeFile(filePath, "", (err) => {
  if (err) {
    console.error("Failed to create .nojekyll:", err);
  } else {
    console.log(".nojekyll file created successfully.");
  }
});

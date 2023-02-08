const fs = require("fs/promises");
const filePath = require("./path");

const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;

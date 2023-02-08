const { v4 } = require("uuid");
const fs = require("fs/promises");
const listContacts = require("./listContacts");
const filePath = require("./path");

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
};

module.exports = addContact;

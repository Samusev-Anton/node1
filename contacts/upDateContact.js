const fs = require("fs/promises");
const listContacts = require("./listContacts");
const filePath = require("./path");

const upDateContact = async (id, name, email, phone) => {
  const contacts = await listContacts();
  let idx = null;

  typeof id === "number"
    ? (idx = contacts.findIndex((contact) => contact.id === id.toString()))
    : (idx = contacts.findIndex((contact) => contact.id === id));

  if (idx === -1) {
    return null;
  }
  typeof id === "number" ? (id = id.toString()) : (id = id);
  contacts[idx] = { id, name, email, phone };

  await fs.writeFile(filePath, JSON.stringify(contacts));
  return contacts[idx];
};

module.exports = upDateContact;

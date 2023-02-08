const fs = require("fs/promises");
const listContacts = require("./listContacts");
const filePath = require("./path");

const upDateContact = async (id, name, email, phone) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  console.log(contacts[idx]);
  contacts[idx] = { id, name, email, phone };
  console.log(contacts[idx]);

  await fs.writeFile(filePath, JSON.stringify(contacts));
  return upDateContact;
};

module.exports = upDateContact;

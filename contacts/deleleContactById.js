const fs = require("fs/promises");
const listContacts = require("./listContacts");
const filePath = require("./path");

const deleteContactById = async (id) => {
  const contacts = await listContacts();
  let idx = null;

  typeof id === "number"
    ? (idx = contacts.findIndex((contact) => contact.id === id.toString()))
    : (idx = contacts.findIndex((contact) => contact.id === id));

  if (idx === -1) {
    return null;
  }
  const [deletedContact] = contacts.splice(idx, 1);

  await fs.writeFile(filePath, JSON.stringify(contacts));
  return deletedContact;
};

module.exports = deleteContactById;

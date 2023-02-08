const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const contacts = await listContacts();
  let result = {};
  typeof id === "number"
    ? (result = contacts.find((contact) => contact.id === id.toString()))
    : (result = contacts.find((contact) => contact.id === id));

  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;

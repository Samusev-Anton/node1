const { program } = require("commander");
const contactsOperations = require("./contacts");


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);

      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      if (!contact) {
        throw new Error(`Product with id=${id} not found`);
      }
      break;

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "upDate":
      const freshContact = await contactsOperations.upDateContact(
        id,
        name,
        email,
        phone
      );
      console.log(freshContact);
      if (!freshContact) {
        throw new Error(`Product with id=${id} not found`);
      }
      break;

    case "remove":
      const deleteContact = await contactsOperations.deleteContactById(id);
      console.log(deleteContact);
      break;
    default:
      console.log("Operation not found");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


invokeAction(argv);

const contactsOperations = require("./contacts");

//

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const contacts = await contactsOperations.listContacts();
      break;
    case "getContactById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Product with id=${id} not found`);
      }
      // console.log(contact);
      break;
    case "addContact":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      break;
    case "upDateContact":
      const freshContact = await contactsOperations.upDateContact(
        id,
        name,
        email,
        phone
      );
      if (!freshContact) {
        throw new Error(`Product with id=${id} not found`);
      }
      break;
    case "deleteContactById":
      const deleteContact = await contactsOperations.deleteContactById(id);
      break;
    default:
      console.log("Operation not found");
  }
};

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "11" });
// invokeAction({
//   action: "addContact",
//   name: "Marucia",
//   email: "marusia@gmail.com",
//   phone: "12345678",
// });

// invokeAction({
//   action: "upDateContact",
//   id: "1",
//   name: "Vasia",
//   email: "marusia@gmail.com",
//   phone: "12345678",
// });

invokeAction({ action: "deleteContactById", id: "3" });

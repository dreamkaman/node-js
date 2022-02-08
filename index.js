const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const operations = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await operations.listContacts();
      console.log(contacts);
      break;
    case 'get':
      const contact = await operations.getContactById(id);
      console.log(contact);
      break;
    case 'add':
      const newContact = await operations.addContact(name, email, phone);
      console.log(newContact);
      break;
    case 'remove':
      const deletedContact = await operations.removeContact(id);
      console.log(deletedContact);
      break;
    default:
      console.log('Unknown action');
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

const fs = require("fs").promises;
const path = require("path");
const Generator = require("id-generator");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  console.table(contacts);
  return contacts;
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data).find((contact) => contact.id == contactId);
  console.table(contacts);
  return contacts;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const filteredContacts = contacts.filter(
    (contact) => contact.id != contactId
  );
  fs.writeFile(contactsPath, JSON.stringify(filteredContacts), "utf8");
  console.table(filteredContacts);
}
async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const contact = {
    id: new Generator().newId(),
    name,
    email,
    phone,
  };
  contacts.push(contact);
  fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
  console.table(contact);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

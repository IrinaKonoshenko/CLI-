const fs = require("fs").promises;
const path = require("path");
const Generator = require("id-generator");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  return contacts.find((contact) => contact.id == id);
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const filteredContacts = contacts.filter((contact) => contact.id != id);
  fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
}
async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const createContacts = contacts.push({
    id: new Generator().newId(),
    name,
    email,
    phone,
  });
  fs.writeFile(contactsPath, JSON.stringify(createContacts));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

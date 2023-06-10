const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./contacts.json");

/**
 * reads contacts from contacts.json file
 * @param {void}
 * @returns {array of objects}
 */
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

/**
 * gets a contact by id from contacts.json file
 * @param {string} id
 * @returns {object}
 */
const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

/**
 * removes a contact by id from contacts.json file
 * @param {string} id
 * @returns {object}
 */
const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

/**
 * adds new contact to contacts.json file
 * @param {object} data
 * @returns {object}
 */
const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

/**
 * updates a contact by id from contacts.json file
 * @param {string} id
 * @param {object} data
 * @returns {object}
 */
const updateContact = async (id, data) => {
  const contacts = await listContacts();
  console.log("contactId", id);
  const index = contacts.findIndex((item) => item.id === id);
  console.log("index", index);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

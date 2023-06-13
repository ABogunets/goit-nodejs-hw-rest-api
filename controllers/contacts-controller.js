const Contact = require("../models/contact");

const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.getContactById(id);
//   if (!result) {
//     throw HttpError(404, `Contact with id: ${id} is not found`);
//   }
//   res.json(result);
// };

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const updateContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, `Contact with id: ${id} is not found`);
//   }
//   res.status(200).json(result);
// };

// const deleteContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.removeContact(id);
//   if (!result) {
//     throw HttpError(404, `Contact with id: ${id} is not found`);
//   }
//   res.status(200).json({ message: "contact deleted" });
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  // updateContactById: ctrlWrapper(updateContactById),
  // deleteContact: ctrlWrapper(deleteContact),
};

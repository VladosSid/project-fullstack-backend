const Contact = require("./schemas/contact");

const getAllContacts = async (userId, favorite, email, name, page, limit) => {
  let query = {
    owner: userId,
  };

  query = email ? { ...query, email } : query;
  query = favorite !== undefined ? { ...query, favorite } : query;
  query = name ? { ...query, name } : query;

  return await Contact.find(query).skip(page).limit(limit);
};

const getContactById = (userId, id) => {
  return Contact.findOne({ _id: id, owner: userId });
};

const createContact = (userId, name, email, phone, favorite) => {
  return Contact.create({ name, email, phone, favorite, owner: userId });
};

const removeContacts = (userId, id) => {
  return Contact.findByIdAndRemove({ owner: userId, _id: id });
};

const updateContact = (userId, id, data) => {
  return Contact.findByIdAndUpdate({ owner: userId, _id: id }, data, {
    new: true,
  });
};

const getFavorite = (
  userId,
  favoriteValue = false,
  email = "nec@Nulla.com",
  name = "Thomas Lucas"
) => {
  console.log(query);

  console.log(12343142354);
  return Contact.find(query);
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  removeContacts,
  updateContact,
  getFavorite,
};

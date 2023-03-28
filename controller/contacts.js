const service = require("../service/contacts");

const get = async (req, res, next) => {
  const { _id } = req.user;
  const { page, limit, favorite, email, name } = req.query;

  try {
    const data = await service.getAllContacts(
      _id,
      favorite,
      email,
      name,
      page,
      limit
    );

    if (data.message) {
      return res.status(400).json({ data });
    }
    return res.status(200).json({
      contacts: data,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { _id } = req.user;
  const { contactId } = req.params;

  const data = await service.getContactById(_id, contactId);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ contact: data });
};

const postContact = async (req, res, next) => {
  const { _id } = req.user;
  const { name, email, phone, favorite } = req.body;

  try {
    const data = await service.createContact(_id, name, email, phone, favorite);
    res.status(200).json({ message: data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const remove = async (req, res, next) => {
  const { _id } = req.user;

  const { contactId } = req.params;

  const data = await service.removeContacts(_id, contactId);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ contact: "Contact delete" });
};

const put = async (req, res, next) => {
  const { _id } = req.user;

  const { contactId } = req.params;

  if (!Object.keys(req.body).length) {
    return res.status(400).json({ message: "missing fields" });
  }

  try {
    const data = await service.updateContact(_id, contactId, req.body);
    res.status(200).json({ contact: data });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

const patchFavorite = async (req, res, next) => {
  const { _id } = req.user;

  const { contactId } = req.params;

  if (!Object.keys(req.body).length) {
    return res.status(400).json({ message: "missing fields" });
  }

  try {
    const data = await service.updateContact(_id, contactId, req.body);

    res.status(200).json({ contact: data });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  get,
  getById,
  postContact,
  remove,
  put,
  patchFavorite,
};

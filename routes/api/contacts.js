const express = require("express");
const ctrlContacts = require("../../controller/contacts");
const { validationUserToken } = require("../../middlewares/userAuthorazed");
const router = express.Router();

router.use(validationUserToken);

router.get("/", ctrlContacts.get);

router.get("/:contactId", ctrlContacts.getById);

router.post("/", ctrlContacts.postContact);

router.delete("/:contactId", ctrlContacts.remove);

router.put("/:contactId", ctrlContacts.put);

router.patch("/:contactId/favorite", ctrlContacts.patchFavorite);

module.exports = router;

const express = require("express")
const router = express.Router()
const {getContacts, postContact, getContact} = require("../controllers/contactController")
router.route("/").get(getContacts).post(postContact)
router.route("/:id").get(getContact)

  router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: "Delete contact" });
  })

  
module.exports = router
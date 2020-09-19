const router = require("express").Router();
const {
  homePage,
  addNewPage,
  addNew,
  getList,
  editTest,
  editTestPage,
  getOne,
  deleteTest,
  changeStatus,
} = require("../controller/apiController");

// view routes
router.get("/", homePage);
router.get("/addNew", addNewPage);
router.get("/edit/:email", editTestPage);

// api routes
router.get("/api/all", getList); //list api
router.post("/api/add", addNew); //add new
router.get("/api/:email", getOne); //find one
router.put("/api/edit/:email", editTest); //update in db
router.delete("/api/delete/:email", deleteTest); //delete in db
router.get("/api/status/:email", changeStatus);

module.exports = router;

const Test = require("../model/testModel");
const catchAsync = require("../utils/catchAsync");

exports.homePage = catchAsync(async (req, res, next) => {
  res.render("home");
});

exports.addNewPage = catchAsync(async (req, res, next) => {
  res.render("create");
});

exports.editTestPage = catchAsync(async (req, res, next) => {
  res.render("edit");
});

exports.getOne = catchAsync(async (req, res, next) => {
  const test = await Test.findOne({ email: req.params.email });

  res.status(200).json({
    status: "success",
    test,
  });
});

exports.getList = catchAsync(async (req, res, next) => {
  const list = await Test.find();

  Test.

  res.status(200).json({
    status: "success",
    list,
  });
});

exports.addNew = catchAsync(async (req, res, next) => {
  const addTest = await Test.create(req.body);

  res.status(201).json({
    status: "created",
    created: addTest,
  });
});

exports.editTest = catchAsync(async (req, res, next) => {
  const editTest = await Test.findOneAndUpdate(
    { email: req.params.email },
    req.body
  );

  res.status(201).json({
    status: "updated",
    editTest,
  });
});

exports.deleteTest = catchAsync(async (req, res, next) => {
  await Test.deleteOne({ email: req.params.email });

  res.status(200).json({
    status: "deleted",
  });
});

exports.changeStatus = catchAsync(async (req, res, next) => {
  const test = await Test.findOne({ email: req.params.email });

  if (test.status == "active") {
    await Test.findOneAndUpdate(
      { email: req.params.email },
      { status: "in-active" }
    );
  } else {
    await Test.findOneAndUpdate(
      { email: req.params.email },
      { status: "active" }
    );
  }

  res.status(200).render("home");
});

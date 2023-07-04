const catchAsync = require("../helper/catchAsync");
const { generateBookData, getBooks } = require("../services/book");
const { httpError } = require("../helper/handleError");

exports.generateFakeData = catchAsync(async (req, res, next) => {
  generateBookData()
    .then((data) => {
      res.status(200).json({ data: { success: true, data } });
    })
    .catch((error) => {
      httpError(res, error);
    });
});

exports.getBooksByPage = catchAsync(async (req, res, next) => {
  getBooks(req, res, next)
    .then((data) => {
      res.status(200).json({ data: { success: true, data } });
    })
    .catch((error) => {
      httpError(res, error);
    });
});

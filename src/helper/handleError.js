const httpError = (res, err) => {
  console.log(err);
  res
    .status(500)
    .json({ message: "Something went wrong, contact the systems", err });
};

module.exports = {
  httpError,
};

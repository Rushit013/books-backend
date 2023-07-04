const { faker } = require("@faker-js/faker");

const Book = require("../entity/book");

exports.generateBookData = () => {
  return new Promise((resolve, reject) => {
    let bookList = [];
    for (var i = 0; i < 20; i++) {
      var book = new Book();

      book.title = faker.company.name();
      book.description = faker.lorem.paragraphs();
      book.discount = faker.number.int({ max: 99 });
      book.cover = faker.image.url();
      book.price = faker.commerce.price();

      book
        .save()
        .then((book) => {
          bookList.push(book);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    resolve("Data generated Successfully");
  });
};

exports.getBooks = (req, res, next) => {
  return new Promise((resolve, reject) => {
    const perPage = 9;
    const page = req.params.page || 1;

    Book.find({})
      .skip(perPage * page - perPage)
      .limit(perPage)
      .then((book) => {
        Book.count()
          .then((count) => {
            //if succeeded do this block of code
            resolve({
              book: book,
              current: page,
              pages: Math.ceil(count / perPage),
              perPage: perPage,
            });
          })
          .catch((err) => {
            //catch error
            reject(err);
          });
      })
      .catch((err) => {
        //catch error
        reject(err);
      });
  });
};

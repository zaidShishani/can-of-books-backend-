const bookModal = require('./BookDB.js')

function getBooksHandler(req, res) {
    console.log('getting the data')
    let UserEmail = req.query.email;
    bookModal.find({ email: UserEmail }, function (error, allData) {
        if (error) {
            console.log('Error can\'t getting the data', error);
        }
        else {
            console.log(allData);
            res.send(allData);
        }
    })
}

    function addBookHandler(req, res) {
        let { email, title, description } = req.body;

        bookModal.create({ email, title, description }).then(() => {

            bookModal.find({ email }, (function (error, allData) {
                if (error) {
                    console.log('404! ERROR', error);
                } else {
                    console.log(allData);
                    res.send(allData);
                }
            }));
        });
    }

    function deleteBookHandler(req, res) {
        let bookId = req.query.bookId;
        let email = req.query.email;

        bookModal.deleteOne({ _id: bookId }).then(() => {
            bookModal.find({ email }), (function (error, allData) {
                if (error) {
                    console.log('404! ERROR', error);
                } else {
                    console.log(allData);
                    res.send(allData)
                }
            })
        });
    }



module.exports = { getBooksHandler, addBookHandler, deleteBookHandler };
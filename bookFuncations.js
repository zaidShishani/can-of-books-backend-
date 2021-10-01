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


module.exports = getBooksHandler;
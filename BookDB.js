const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    email: String,
    
});

const bookModal = mongoose.model('Book', bookSchema);

function seedBookInfo() {

    const book1 = new bookModal({
        title: 'all the bright places ',
        description: 'All the Bright Places is a young adult fiction novel by Jennifer Niven which is based on the author\'s personal story. The novel was first published on January 6, 2015 through Knopf Publishing Group and is Niven\'s first young adult book.',
        email: 'zaidjamo94@gmail.com',

    });

    const book2 = new bookModal({
        title: 'turtles all the way down',
        description: 'Turtles All the Way Down is a young adult novel written by American author John Green. He published this novel on October 10, 2017, by Dutton Books. It is his fifth solo novel, and his seventh overall.',
        email: 'zaidjamo94@gmail.com',

    });

    const book3 = new bookModal({
        title: '1984',
        description: 'Nineteen Eighty-Four, often referred to as 1984, is a dystopian social science fiction novel by the English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell\'s ninth and final book completed in his lifetime. ',
        email: 'zaidjamo94@gmail.com',

    });
    book1.save();
    book2.save();
    book3.save();
}

//seedBookInfo();
module.exports = bookModal;
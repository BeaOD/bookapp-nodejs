//import booksmodel
const BookModel= require('./models')

//routes - controller
const allBooksController = (req,res) =>{
    //list all books - method to fetch data from database
    //we are not creating a new book method but fetching from existing

    const books = BookModel.all();
    res.json({data: books})
}
 
const createBookController = (req,res) =>{
    //create a book - in here extract data from body
    // .body is supplied by body parser middleware
    const {title, author, year, chapters, price,
        whereToBuy} = req.body;
    const book = new BookModel({title, author, year, chapters, price,
        whereToBuy});
        book.save();
    res.json({message: 'created successfully', data: book})


}
const updateBookController = (req,res) =>{
    //comment- update  book details
    const {title, author, year, chapters, price,
        whereToBuy}  = req.body;
    const updatedBook = new BookModel({title, author, year, chapters, price,
        whereToBuy})
    res.json({message: 'update completed', data: updatedBook})
    updatedBook.save();
    res.json({ message: 'update completed', data: updatedBook})
}


const deleteBookController = (req,res) =>{
    //delete
    const {title} = req.body;
    //call static method and pass *title* to it
    const deletedBook = BookModel.delete({title});
    res.json({message: 'book deleted', data: deletedBook});
}


module.exports = {
    allBooksController,
    createBookController,
    updateBookController,
    deleteBookController
}
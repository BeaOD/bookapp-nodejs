//import  database
let booksdatabase = require('./databases')


//constructor with object of 
class BookModel {
    constructor({title, author, year, chapters, price,
        whereToBuy }){
        this.title = title;
        this.author = author;
        this.year = year;
        this.chapters = chapters;
        this.price = price;
        this.whereToBuy = whereToBuy;
    }
    //save method to save information to our database
    save(){
    //this - is all the instances in the constructor
    booksdatabase.push(this);return this;
    }
    static all(){
        return booksdatabase;
    }
    static update(updateBookInfo = {}){
        //find the book and  update it
        booksdatabase= booksdatabase.map(book =>{
            if(book.title === updateBookInfo.title){
                return{...book, ...updateBookInfo};
            }
            return book;
        })
       
    }
    static delete({title}){
        let deletedBook = null;
        booksdatabase= booksdatabase.filter(book => {
            console.log(book.title === title)
            if(book.title !==title){
                
                return true;
            }
            deletedBook= book;
            return false;
        })
        return deletedBook
    }
}

module.exports = BookModel
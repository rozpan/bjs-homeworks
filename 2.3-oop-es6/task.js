
class PrintEditionItem {
<<<<<<< HEAD
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    fix() {
        this.state = 1.5 * this.state;
    }    

    set state(value) {
        if( value > 100) {
            this._state = 100;
        } 
        else if(value < 0) {
            this._state = 0;
        }
        else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state)
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(key, value) {
        for (let i = 0; i < this.books.length; i++) {
                if (value == this.books[i][key]) {
                    return this.books[i];
                }
                else if (i == this.books.length - 1) {
                    return null;
                }
        }
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
                if (bookName == this.books[i].name) {
                    return(this.books.splice(i, 1));
                
                }
                else if (i == this.books.length - 1) {
                    return null;
                }
        }
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);
=======
	constructor(name, releaseDate, pagesCount, state = 100) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = null;
	}

 	fix() {
		this.state = this.state * 1.5;
	}
		
	set state (newState) {
		if (newState < 0) {
			this._state = 0;
			}
		else if (newState > 100) {
			this._state = 100;
		}
		else {
			this._state = newState;
		}
	}
	get state() {
    	return this._state;
	} 
}




class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state)
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
		constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state)
		this.type = "book";
		this.author = author;
	}
}


class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state)
		this.type = "fantastic";
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state)
		this.type = "novel";
	}
}
class detective extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state)
		this.type = "detective";
	}
}




	


>>>>>>> 259cb4374c78b63cc7bea209639913b9516b67ca

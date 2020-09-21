
class PrintEditionItem {
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




	



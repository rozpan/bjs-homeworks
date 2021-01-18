//задача_1
	function parseCount(a) {
		if (isNaN(Number.parseInt(a, 10))) {
			throw new Error("Невалидное значение");
		}
		return Number.parseInt(a, 10);
	}
	function validateCount(a) {
		try {
			return parseCount(a); 
		}
		catch {
			return new Error("Невалидное значение!");
		}
	}
    
    
//задача_2
    class Triangle {
		constructor(a, b, c) {
			if ((a + b < c) || (a + c < b) || (b + c < a)) {
				throw new Error("Треугольник с таким сторонами не существует!");
			}
			this.a = a;
			this.b = b;
			this.c = c;
		}
		getPerimeter() {
			if (this.a !== undefined) {
				return (this.a + this.b + this.c);
			}
			else {
				return "Ошибка! Треугольник не существует!";
			}	
		}
		getArea() {
			if (this.a !== undefined) {
				let sPerimeter = this.getPerimeter() / 2;
				return (Math.sqrt(sPerimeter * (sPerimeter - this.a) * (sPerimeter - this.b) * (sPerimeter - this.c))).toFixed(3);
			}
			else {
				return "Ошибка! Треугольник не существует!";
			}
		}
	}

	function getTriangle(a, b, c) {
		try {
			return new Triangle(a, b, c);
		}
		catch {
			return new Triangle();
		}		
	}

	
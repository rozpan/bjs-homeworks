
//задача_1_доработка

	function parseCount(a) {
		let integer = Number.parseInt(a, 10);
		if (isNaN(integer)) {
			const notNumberError = new Error("Невалидное значение");
			throw notNumberError;
		}
		return integer;
	}
	
	function validateCount(a) {
		try {
			return parseCount(a); 
		}
		catch(notNumberError) {
			return notNumberError;
		}
	}
	

//задача_2_доработка

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
			return (this.a + this.b + this.c);
		}
		getArea() {
			let sPerimeter = this.getPerimeter() / 2;
			 return parseFloat((Math.sqrt(sPerimeter * (sPerimeter - this.a) * (sPerimeter - this.b) * (sPerimeter - this.c))).toFixed(3));
		}
	}

	class TriangleFalse {
		getPerimeter() {
			return "Ошибка! Треугольник не существует!";
		}
		getArea() {
			return "Ошибка! Треугольник не существует!";
		}
	}

	function getTriangle(a, b, c) {
		try {
			return new Triangle(a, b, c);
		}
		catch {
			return new TriangleFalse();
		}

			//вариант преподавателя
			/*
			return {
				getArea: () => "Ошибка! Неправильный треугольник",
				getPerimeter: () => "Ошибка! Неправильный треугольник"
			  }
			  */		
	}


	
//задание_1
/*
const weapons = [
    new Knife(), 
    new Staff(), 
    new Axe(), 
    new StormStaff(), 
    new LongBow(), 
    new Bow()
];
//console.table(weapons);

//----------------------------------------------------
//1. ф-я getNames возвращает имена всех оружий
function getNames(n) {
	return n.map(number => number.name);
}
getNames(weapons);


//----------------------------------------------------
//2. ф-я getCountReliableWeapons возвращает количество оружий
function getCountReliableWeapons(pr) {
	return weapons.filter(n => pr < n.durability).length;
}
getCountReliableWeapons(100);


//----------------------------------------------------
//3. ф-я hasReliableWeapons возвращает правду/ложь
function hasCountReliableWeapons(pr) {
	return weapons.some(n => pr < n.durability);
}
hasCountReliableWeapons(950);


//----------------------------------------------------
//4. ф-я getReliableWeaponsNames возвращает имена
function getReliableWeaponsNames(pr) {
	return weapons.filter(n => pr < n.durability)
	.map(n => n.name);
}
getReliableWeaponsNames(250);


//----------------------------------------------------
//5. getTotalDamage возвращает сумму урона всех оружий
function getTotalDamage() {
	return weapons.reduce((sum, n) => sum + n.attack, 0);
}
getTotalDamage();
*/





//задание_2
function compareArrays (a, b) {
	function f(n, i) {
		return n === b[i];
	}
	if ((a.length === b.length) && (a.every(f))) {
	 	return true;
	}
	else {
		return false;
	}
}
function sleep(milliseconds) {
	let e = new Date().getTime() + milliseconds;
	while (new Date().getTime() <= e) {}
}
function sum(...args) {
	sleep(100); 
	/* вычисления суммы пока не нужны...
	return args.reduce((sum, arg) => {
	  return sum + arg;
	}, 0);
	*/
	return [...args]; 
  }

function memorize(fn, limit) {
	const memory = [
		{
		  args: [3, 4],
		  result: 7
		},
		{
		args: [1, 3],
		result: 4
		} 
	];

	return function bar (a, b) { 
		if (memory.find(El => compareArrays(El.args, fn(a, b)))) {
			return (memory.find(El => compareArrays(El.args, fn(a, b)))).result;
		}
		else {
			memory.push({args: fn(a, b)});
			return memory;
		}
	}
}
const mSum = memorize(sum, 5);
console.log(mSum(1, 3)); 

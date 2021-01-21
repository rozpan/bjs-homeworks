//задание_1
const weapons = [
    new Knife(), 
    new Staff(), 
    new Axe(), 
    new StormStaff(), 
    new LongBow(), 
    new Bow()
];
console.table(weapons);

//----------------------------------------------------
//1. ф-я getNames возвращает имена всех оружий
//вариант_1
function getNames(n) {
	return n.name;
}
console.log(weapons.map(getNames));
//вариант_2
weapons.forEach(n => console.log(n.name));

//----------------------------------------------------
//2. ф-я getCountReliableWeapons возвращает количество
function inside(n) {
	function getCountReliableWeapons(number) {
		if (number < n.durability) {
			return n;
		}
	}
	return getCountReliableWeapons(600);
}
console.log(weapons.filter(inside).length);

//----------------------------------------------------
//3. ф-я hasReliableWeapons возвращает правду/ложь
function inside_(n) {
	function hasCountReliableWeapons(number) {
		if (number < n.durability) {
			return n;
		}
	}
	return hasCountReliableWeapons(900);
}
console.log(weapons.some(inside_));

//----------------------------------------------------
//4. ф-я getReliableWeaponsNames возвращает имена
function inside__(n) {
	function getReliableWeaponsNames(number) {
		if(number < n.durability) {
			return n.name;
		}
	}
	return getReliableWeaponsNames(250); 
}
console.log(weapons.map(inside__).filter(number => number !== undefined));

//----------------------------------------------------
//5. getTotalDamage возвращает сумму урона всех оружий
let totalDamage = 0;
function getTotalDamage(n) {
	totalDamage += n.range;
	return totalDamage;
}
console.log(((weapons.map(getTotalDamage)).reverse())[0]);

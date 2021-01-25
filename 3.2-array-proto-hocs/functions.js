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
function getNames(n) {
	const arName = n.map(number => number.name);
	return arName;
}
getNames(weapons);


//----------------------------------------------------
//2. ф-я getCountReliableWeapons возвращает количество оружий
function getCountReliableWeapons(pr) {
	const result = weapons.filter(n => {
		if (pr < n.durability) {
			return n.durability
		} 
	});
	return result.length;
}
getCountReliableWeapons(100);


//----------------------------------------------------
//3. ф-я hasReliableWeapons возвращает правду/ложь
function hasCountReliableWeapons(pr) {
	const result = weapons.some(n => {
		if (pr < n.durability) {
			return true;
		}
	});
	return result;
}
hasCountReliableWeapons(950);


//----------------------------------------------------
//4. ф-я getReliableWeaponsNames возвращает имена
function getReliableWeaponsNames(pr) {
	const result = weapons.filter(n => {
		if (pr < n.durability) {
			return n.name;
		}
	})
	.map(n => n.name);
	return result;
}
getReliableWeaponsNames(250);


//----------------------------------------------------
//5. getTotalDamage возвращает сумму урона всех оружий
function getTotalDamage() {
	let totalDamage = 0;
	const result = (weapons.map(n => totalDamage += n.range).reverse())[0];
	return result;
}
getTotalDamage();

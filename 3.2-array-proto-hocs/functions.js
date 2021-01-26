//задание_1
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

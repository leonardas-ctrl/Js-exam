import { Calculator } from "./calculator.js";
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const calc = new Calculator();
console.log(calc.sum(5, 3));
console.log(calc.subtraction(10, 4));
console.log(calc.multiplication(6, 2));
console.log(calc.division(8, 4));
console.log(calc.division(6, 2));

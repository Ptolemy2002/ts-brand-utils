import { Branded, WithBrand } from "@ptolemy2002/ts-brand-utils";

declare const PositiveNumberBrand: unique symbol;
declare const NegativeNumberBrand: unique symbol;

type PositiveNumber = Branded<number, [typeof PositiveNumberBrand]>;
type WithPositiveNumberBrand<T extends number> = WithBrand<T, typeof PositiveNumberBrand>;

type NegativeNumber = Branded<number, [typeof NegativeNumberBrand]>;
type WithNegativeNumberBrand<T extends number> = WithBrand<T, typeof NegativeNumberBrand>;

type BothNumber = Branded<number, [typeof PositiveNumberBrand, typeof NegativeNumberBrand]>;

const positiveNumberValidator = (n: number): n is PositiveNumber => n >= 0;
const negativeNumberValidator = (n: number): n is NegativeNumber => n < 0;

function takesPositiveNumber<T extends number>(n: WithPositiveNumberBrand<T>) {}
function takesNegativeNumber<T extends number>(n: WithNegativeNumberBrand<T>) {}
const positiveNumber = 1;
const negativeNumber = -1;

if (positiveNumberValidator(positiveNumber)) {
    console.log("Positive number test passed");
    takesPositiveNumber(positiveNumber);
}

if (negativeNumberValidator(negativeNumber)) {
    console.log("Negative number test passed");
    takesNegativeNumber(negativeNumber);
}

// Determine if the brand array structure works by confirming
// a number with both brands is accepted by both functions
const bothNumberValidator = (n: number): n is BothNumber => true;

const bothNumber = 0;
if (bothNumberValidator(bothNumber)) {
    console.log("Both number test passed");
    takesPositiveNumber(bothNumber);
    takesNegativeNumber(bothNumber);
}

console.log("Compiled without errors");
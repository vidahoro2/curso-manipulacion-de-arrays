const matriz = [
    1,
    [1,2,3],
    [4,5,6],
    [7,8,[9,10,[11,12]]]
];

const rta = matriz.flat(3);

console.log(rta);

const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta1 = array.flat();
console.log(rta1);

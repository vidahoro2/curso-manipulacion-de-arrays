const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const rta1 = elements.concat(otherElements);
console.log(rta1);

const rta2 = [...elements, ...otherElements];
console.log('...', rta2);

elements.push(...otherElements);
console.log('elements', elements);
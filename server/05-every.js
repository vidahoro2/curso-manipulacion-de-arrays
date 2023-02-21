const numbers = [1,30,39,29,10,13];

const rta = numbers.every(item => item <=40)
console.log(rta);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

const rta2 = team.every(item => item.age <= 15);
console.log(rta2);
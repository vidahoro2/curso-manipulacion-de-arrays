const numbers = [1,2,3,4];

const rta = numbers.some(item => item % 2 === 0);
console.log(rta);

const orders = [

    {

        customerName : 'Nicolas',
        total: 60,
        delivered:true,
    },
    {

        customerName : 'Zulema',
        total: 120,
        delivered:false,
    },
    {
        customerName : 'Santiago',
        total: 180,
        delivered:true,
    },
    {
        customerName : 'Valentina',
        total: 240,
        delivered:true,
    },
    {
        customerName : 'Nicolas',
        total: 435,
        delivered:false,
    },

];

const rta2 = orders.some(item => item.delivered);
console.log('rta2', rta2);
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppoinment = {
    startDate: new Date(2021,1,1,8),
    endDate: new Date(2021,1,1,9,30),
};
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
        {start:date.startDate , end: date.endDate},
        {start: newDate.startDate , end:newDate.endDate}
        )
    })
}

console.log('isOverlap',isOverlap(newAppoinment));
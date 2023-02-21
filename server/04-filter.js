const words = ['spray','limit','elite','exuberant'];

const rta = words.filter(item => item.length >= 6);

console.log('rta: ', rta);
console.log( 'original', words);


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

const rta2 = orders.filter(item => item.delivered && item.total >= 100)
console.log(rta2);

const search = (query) =>{
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search('Nico'));


const objetos = ['amor','sol','piedra','dia'];

const objetosFiltrados =  objetos.filter(item =>  item.length >=4);
console.log(objetosFiltrados);
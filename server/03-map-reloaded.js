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

];
console.log('original', orders);
const totales = orders.map(item => item.total)
console.log('rta', totales);

// const totales2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// })
// console.log('rta2', totales2);

const totales3 = orders.map(item => {

    //De esta forma respeta el array original
    return {
        ...item,
        tax: 0.19

    }
})
console.log('rta3', totales3);
console.log('original', orders);


const comida  = [
    {
        name:'Sopa',
        price:12,
        stock: true
    },
    {
        name:'Salmón',
        price:100,
        stock: false
    },
    {
        name:'Sandwich',
        price:121,
        stock: true
    }

]



// const newComida = comida.map(plato =>{
//     return{
//         ...plato,
//         tax:Math.trunc(plato.price * 0.19)
        
//     }
    
// })


function addTaxes(array){
    const newComida = comida.map(plato=>{
        return{
            ...plato,
            taxes:Math.trunc(plato.price * 0.19)
        }
    
    })
    console.log(newComida);    
}
addTaxes(comida);
console.log(comida);

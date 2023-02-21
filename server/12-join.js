const elements = ['Fire', 'Air', 'Water'];

const rta= elements.join('--')
console.log(rta);

const title = 'Curso de manipulación de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);

const materias = [

    {
        nombre:'Calculo',
        numeroCreditos:1,
        intensidadHoraria:4
    },
    {
        nombre:'Calculo2',
        numeroCreditos:1,
        intensidadHoraria:4
    },
    {
        nombre:'Calculo3',
        numeroCreditos:1,
        intensidadHoraria:4
    },
]

const mostrarNombre = materias.forEach(element => {
    console.log(element.nombre); 

    
});
console.log(mostrarNombre);
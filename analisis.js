var guatemala = []

guatemala.push({
    name: "Josue",
    salary: 600,

});
guatemala.push({
    name: "Jose",
    salary: 500,

});
guatemala.push({
    name: "Jesus",
    salary: 800,

});
guatemala.push({
    name: "Kevin",
    salary: 700,

});
guatemala.push({
    name: "Karla",
    salary: 400,

});
guatemala.push({
    name: "Casemiro",
    salary: 300,

});
guatemala.push({
    name: "Pedro",
    salary: 600,

});
guatemala.push({
    name: "Jessica",
    salary: 800,

});

//Extrae los salarios de mi objeto guatemala
const salariosG = guatemala.map(
    function (persona){
        return persona.salary;
    }
);

// Me extrae los salarios y me verifica cuantos se repiten. En un 
// array de objetos 
const salariosGuatemalaSort = salariosG.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Calcula si es par o no 
function esPar(numerito){
    return(numerito%2 === 0);
}

// me calcula la mediana de los salarios
function medianaSalarios(lista){
    let personaMitad;
    const mitad = parseInt(lista.length /2);
    if(esPar(lista.length)){
        personaMitad = (lista[mitad -1] + lista[mitad]) /2;

    }else{
        personaMitad = lista[mitad];
    }
    return personaMitad;

}

const medianaGeneralG = medianaSalarios(salariosGuatemalaSort);


// Mediana del top 10%
const spliceStar = parseInt((salariosGuatemalaSort.length *90)/100);
const spliceCount = parseInt((salariosGuatemalaSort.length - spliceStar ));
const salario10GTop = salariosGuatemalaSort.splice(spliceStar,spliceCount);

const medianaTop10 = medianaSalarios(salario10GTop);

console.log({
    medianaGeneralG,
    medianaTop10,
})
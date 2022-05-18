



function promedio(lista){
    
   // let sumaLista = 0;
   // for(let i =0; i<lista.length; i++){
   //     sumaLista += lista[i];
    //}
    // Me hace lo mismo que el for, como primer parametro el reduce lleva el valor por defecto
    // y el segundo parametro es el nuevo elemento que tendra
    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    sumaLista /=lista.length;
    return sumaLista;
}
 mEdiana = mediana([1,2,4,5,6,7,8]);

function mediana(lista){
    lista.sort();
    let mediana = 0;
    mitadLista = parseInt(lista.length /2);
    if(lista.length%2 ===0){
        mediana = (lista[mitadLista-1] + lista[mitadLista])/2;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}

function moda(lista){
    const listaCount = {};
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento]+=1;
            }else{
                listaCount[elemento]=1;
            }
        }
    );

    var listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
           return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    return listaArray
}


var moda1 = moda([1,1,1,2,2,2,3,3,3,4,4,4,4,4,5,5,5,6,7,0,8,8]);
console.log(moda1[moda1.length -1]);



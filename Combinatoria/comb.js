


let permuts = [];

for (let i=1; i<4;i++){ // Iteramos por tener el primer digito
  for (let j=1; j<4;j++){ // Iteramos por tener el segundo digito
    if(i==j) continue; // Si son iguales, no se considera porque no es un permutacion
    for (let h=1; h<4;h++){ // Iteramos por tener el tercer digito
      if(i==h||j==h) continue; // Si son iguales, no se considera porque no es un permutacion
      // console.log(`${i},${j},${h}`)
      permuts.push([i,j,h]); // Agregamos la permutacion al arreglo de permutaciones resultantes
    }
  }
}

console.log(permuts)
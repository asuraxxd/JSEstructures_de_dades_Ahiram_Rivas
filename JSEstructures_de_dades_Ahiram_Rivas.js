//1.- Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en
// aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.

const exercici1 = () => {
    const numeros = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)); // Números aleatoris
    console.log('Array original:', numeros);

    const ordenat = [...numeros].sort((a, b) => a - b); // Ordenar
    console.log('Array ordenat:', ordenat);

    console.log('Primer valor:', ordenat[0]);
    console.log('Últim valor:', ordenat[ordenat.length - 1]);
};

exercici1();

//2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior

const exercici2 = () => {
    const original = [3, 1, 4, 1, 5];
    const copia = [...original]; // Spread Operator
    console.log('Array original:', original);
    console.log('Nou array (còpia):', copia);
};

exercici2();

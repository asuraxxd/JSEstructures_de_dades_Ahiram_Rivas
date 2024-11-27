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

//3.- Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).

const exercici3 = () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];

    const fusionat = [...array1, ...array2]; // Fusionar
    const senseDuplicats = fusionat.filter((item, index) => fusionat.indexOf(item) === index); // Eliminar duplicats

    console.log('Array fusionat sense duplicats:', senseDuplicats);
};

exercici3();

//4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.

const exercici4 = () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];

    const senseDuplicats = [...new Set([...array1, ...array2])]; // Fusió amb `Set`
    console.log('Set sense duplicats:', senseDuplicats);
};

exercici4();

//5.- Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número.
// Exemple: [1, 3, 6] => [1, 27, 216]

const exercici5 = () => {
    const numeros = [1, 3, 6];

    // Implementació de `map`
    const mapPersonalitzat = (array, callback) => {
        const resultat = [];
        for (const element of array) {
            resultat.push(callback(element));
        }
        return resultat;
    };

    const cubs = mapPersonalitzat(numeros, num => Math.pow(num, 3)); // Valor cúbic
    console.log('Valors cúbics:', cubs);
};

exercici5();

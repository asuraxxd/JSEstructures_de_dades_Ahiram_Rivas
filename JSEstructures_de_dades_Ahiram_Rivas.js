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

//6.- A partir d’una array de strings, es creï una nova amb aquelles que tinguin més d’una lletra ‘a’

const exercici6 = () => {
    const paraules = ['casa', 'paret', 'sala', 'motor', 'camarera'];

    const filtrades = paraules.filter(paraula => {
        const comptadorA = paraula.split('').filter(char => char === 'a').length;
        return comptadorA > 1;
    });

    console.log('Paraules amb més d\'una "a":', filtrades);
};

exercici6();

//7.- Crea una estructura Map i insereix 3 claus – valor. Les 3 claus han de ser de tipus de dades
// diferents. Et deixa?

const exercici7 = () => {
    const mapa = new Map();

    mapa.set(1, 'Enter');
    mapa.set('clau', 'String');
    mapa.set(3.14, 'Double');

    console.log('Mapa:', mapa);
};

exercici7();

//8.- Donada una paraula, insereix cada caràcter dins d’una cua. Extreu ara de la cua els caràcters un a
// un per poder decidir si és un palíndrom o no.

const exercici8 = () => {
    const paraula = 'radar';
    const cua = [...paraula]; // Afegir caràcters a la cua

    let inversa = '';
    while (cua.length) {
        inversa += cua.pop(); // Extreure de la cua
    }

    if (paraula === inversa) {
        console.log(`${paraula} és un palíndrom.`);
    } else {
        console.log(`${paraula} no és un palíndrom.`);
    }
};

exercici8();

//9.- Crea una Cua d’Objectes amb dades de 3 pel·lícules. Itera la cua per mostrar per pantalla la
// pel·lícula més antiga.

const exercici9 = () => {
    const cua = [
        { titol: 'Pulp Fiction', any: 1994 },
        { titol: 'The Godfather', any: 1972 },
        { titol: 'Inception', any: 2010 }
    ];

    let mesAntiga = cua[0];
    for (const pelicula of cua) {
        if (pelicula.any < mesAntiga.any) {
            mesAntiga = pelicula;
        }
    }

    console.log('Pel·lícula més antiga:', mesAntiga);
};

exercici9();

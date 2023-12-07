// Ejercicio 1

// Crea una arrow function que tenga dos parámetros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parámetros.

const basicSum = (a = 10, b = 5) => a + b;

// 1.1 Ejecuta esta función sin pasar ningún parámetro

console.log(basicSum());

// 1.2 Ejecuta esta función pasando un solo parámetro

console.log(basicSum(7));

// 1.3 Ejecuta esta función pasando dos parámetros

console.log(basicSum(7, 7));

// Ejercicio 2 - Destructuring

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprímelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };

const { title, gender, year } = game;

console.log(title, gender, year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente, imprímelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiéndolo por consola.

const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};

const { name: animalName, race } = animalFunction();

console.log('Su nombre es ' + animalName + ' y su raza es ' + race);

// 2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo está bien imprimiéndolo.

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };

const { name: carName, itv } = car;

const [year2, year1, year3] = itv;

console.log(`El coche es un ${carName}, y pasó la ITV en el ${year1}, el ${year2} y el ${year3}`);

// Ejercicio 3 - Spread Operator

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log(pointsListCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };

const toyCopy = { ...toy };

console.log(toyCopy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operator.
const pointsList_2 = [32, 54, 21, 64, 75, 43];
const pointsList_3 = [54, 87, 99, 65, 32];

const pointsTotalList = [...pointsList_2, ...pointsList_3];

console.log(pointsTotalList);

// 3.4 Dado los siguientes objetos, crea un nuevo objeto fusionando los dos con spread operators.
const toy_2 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };

const updatedToy = { ...toy_2, ...toyUpdate };

console.log(updatedToy);

// 3.5 Dado el siguiente array, crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operator.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColors = [...colors];
newColors.splice(2, 1);

console.log(newColors);

// Ejercicio 4 - Map

// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const userNames = users.map(user => user.name);
console.log(userNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users_2 = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const userNames_2 = users_2.map(user => {
    if (user.name.startsWith('A')) {
        user.name = 'Anacleto';
        return user.name;
    } else {
        return user.name;
    }
});

console.log(userNames_2);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];

const updatedCities = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    }
    return city.name;
});

console.log(updatedCities);

// Ejercicio 5 - Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18.

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adultAges = ages.filter(age => age > 18);

console.log(adultAges);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages_2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages_2.filter(age => age % 2 === 0);

console.log(evenAges);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log(lolStreamers);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name.

const streamers_2 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersContainingU = streamers_2.filter(streamer => streamer.name.includes('u'));

console.log(streamersContainingU);

// 5.5 Utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const legendsStreamers = streamers_2.filter(streamer => streamer.gameMorePlayed.includes('Legends')).filter(streamer => {
    if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        return streamer;
    }
    return streamer;
});

console.log(legendsStreamers);
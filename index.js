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

// 5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers_3 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('[data-function="toFilterStreamers"]');

const inputFilter = (event) => streamers_3.filter(streamer => {
    if (streamer.name.toLowerCase().includes(event.target.value)) {
        console.log(streamer);
    }
});

input.addEventListener('input', inputFilter);

// Ejercicio 6 - Find

// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const oneHundred = numbers.find(number => number === 100);

console.log(oneHundred);

// 6.2 Dado el siguiente array, usa .find() para encontrar la pelicula del año 2010.

const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
];

const movieFrom2010 = movies.find(movie => movie.date === 2010);

console.log(movieFrom2010);

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
    { name: 'Zalamero', planet: 'Eden', age: 4029 },
    { name: 'Paktu', planet: 'Andromeda', age: 32 },
    { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
];
const mutations = [
    { name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor' },
    { name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna' },
    { name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer' }
];

const alien = aliens.find(alien => alien.name === 'Cucushumushu');

const mutation = mutations.find(mutation => mutation.name === 'Porompompero');

const updatedAlien = { ...alien, mutation: mutation };

console.log(updatedAlien);

// Ejercicio 7 - Reduce

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los exámenes de los alumnos usando la función .reduce().

const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

const sumExams = exams.reduce((acc, exam) => acc + exam.score, 0);

console.log('La suma de todas las notas es ' + sumExams);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los exámenes de los alumnos que estén aprobados usando la función .reduce().

const approvedExams = exams.filter(exam => exam.score >= 5);

const sumApprovedExams = approvedExams.reduce((acc, exam) => acc + exam.score, 0);

console.log('La suma de todas las notas de exámenes aprobados es ' + sumApprovedExams);

// 7.3 Dado el mismo array, haz la media de las notas de todos los exámenes .reduce().

const examsAverage = exams.reduce((acc, exam) => acc + exam.score / exams.length, 0);

console.log('La media de todas las notas es ' + examsAverage.toFixed(2));

// Ejercicio 8 - Bonus

// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score.

const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assassins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
];

const rpgVideogames = videogames.filter(videogame => videogame.genders.includes('RPG'));

const rpgVideogamesAverage = rpgVideogames.reduce((acc, videogame) => acc + videogame.score / rpgVideogames.length, 0);

console.log(`La media de las notas de todos los videojuegos de género RPG es ${rpgVideogamesAverage.toFixed(2)}`);

// Ejercicio 9

// 9.1 Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.

const movies_2 = [
    {
        title: "Bracula: Condemor II",
        duration: 192,
        categories: ["comedia", "aventura"],
    },
    {
        title: "Spider-Man: No Way Home",
        duration: 122,
        categories: ["aventura", "acción"],
    },
    {
        title: "The Voices",
        duration: 223,
        categories: ["comedia", "thriller"],
    },
    {
        title: "Shrek",
        duration: 111,
        categories: ["comedia", "aventura", "animación"],
    },
];

const movieCategories = (array) => {
    const newCategories = [];
    for (const movie of array) {
        for (const category of movie.categories) {
            if (!newCategories.includes(category)) {
                newCategories.push(category);
            }
        }
    }
    return newCategories;
};

console.log(movieCategories(movies_2));

// Ejercicio 10

// 10.1 Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users_3 = [
    {
        name: "Alberto",
        favoriteSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Antonio",
        favoriteSounds: {
            waves: { format: "mp3", volume: 30 },
            shower: { format: "ogg", volume: 55 },
            train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Pedro",
        favoriteSounds: {
            shower: { format: "mp3", volume: 50 },
            train: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Cristina",
        favoriteSounds: {
            waves: { format: "mp3", volume: 67 },
            wind: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
];

const volumeAverage = (array) => {
    const volumeLevels = [];

    for (const user of array) {
        const { favoriteSounds } = user;
        for (const sound in favoriteSounds) {
            const soundsConfig = favoriteSounds[sound];
            volumeLevels.push(soundsConfig.volume);
        }
    }
    return volumeLevels.reduce((acc, currentValue) => acc + currentValue / volumeLevels.length, 0);
};

console.log(`La media de volumen de todos los sonidos favoritos de los usuarios es ${volumeAverage(users_3)}`);
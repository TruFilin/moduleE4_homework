function logOwnProperties(obj) {
    // Проверяем, является ли аргумент объектом
    if (typeof obj !== 'object' || obj === null) {
        console.log('Аргумент должен быть объектом.');
        return;
    }

    // Получаем ключи собственных свойств
    const ownKeys = Object.keys(obj);

    // Перебираем и выводим ключи и значения
    ownKeys.forEach(key => {
        console.log(`${key}: ${obj[key]}`);
    });
}

// Пример использования
const exampleObject = {
    name: 'Konstantin',
    age: 29,
    city: 'Tula'
};

logOwnProperties(exampleObject);

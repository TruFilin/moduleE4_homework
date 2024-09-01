function hasProperty(propertyName, obj) {
    // Проверяем, что аргумент - это объект
    if (typeof obj !== 'object' || obj === null) {
        console.log('Второй аргумент должен быть объектом.');
        return false;
    }

    // Используем метод hasOwnProperty для проверки наличия свойства
    return obj.hasOwnProperty(propertyName);
}

// Пример использования
const exampleObject = {
    name: 'Konstantin',
    age: 30,
    city: 'Moscow'
};

console.log(hasProperty('age', exampleObject));  // true
console.log(hasProperty('country', exampleObject)); // false

function createEmptyObject() {
    return Object.create(null);
}

// Пример использования
const emptyObject = createEmptyObject();
console.log(emptyObject); // {}
console.log(Object.getPrototypeOf(emptyObject)); // null

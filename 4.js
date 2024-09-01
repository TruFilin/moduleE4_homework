// Родительская функция для электроприборов
function ElectricalAppliance(name, power) {
    this.name = name; // Имя прибора
    this.power = power; // Мощность в ваттах
    this.isOn = false; // Статус прибора (включен/выключен)
}

// Метод для включения прибора
ElectricalAppliance.prototype.turnOn = function() {
    if (!this.isOn) {
        this.isOn = true;
        console.log(`${this.name} включен.`);
    } else {
        console.log(`${this.name} уже включен.`);
    }
};

// Метод для выключения прибора
ElectricalAppliance.prototype.turnOff = function() {
    if (this.isOn) {
        this.isOn = false;
        console.log(`${this.name} выключен.`);
    } else {
        console.log(`${this.name} уже выключен.`);
    }
};

// Метод для получения потребляемой мощности
ElectricalAppliance.prototype.getPowerConsumption = function() {
    return this.isOn ? this.power : 0;
};

// Конструктор для настольной лампы
function DeskLamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power); // Вызов родительского конструктора
    this.brightness = brightness; // Яркость лампы
}

// Создание делегирующей связи [[Prototype]]
DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Метод для изменения яркости
DeskLamp.prototype.setBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} теперь с яркостью: ${this.brightness}`);
};

// Конструктор для компьютера
function Computer(name, power, hasMonitor) {
    ElectricalAppliance.call(this, name, power); // Вызов родительского конструктора
    this.hasMonitor = hasMonitor; // Наличие монитора
}

// Создание делегирующей связи [[Prototype]]
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Пример использования
const myDeskLamp = new DeskLamp('Настольная лампа', 60, 'яркая');
const myComputer = new Computer('Компьютер', 500, true);

// Включаем приборы и выводим информацию о потребляемой мощности
myDeskLamp.turnOn();
console.log(`Потребляемая мощность: ${myDeskLamp.getPowerConsumption()} Вт`);

myComputer.turnOn();
console.log(`Потребляемая мощность: ${myComputer.getPowerConsumption()} Вт`);

// Выключаем приборы
myDeskLamp.turnOff();
console.log(`Потребляемая мощность: ${myDeskLamp.getPowerConsumption()} Вт`);

myComputer.turnOff();
console.log(`Потребляемая мощность: ${myComputer.getPowerConsumption()} Вт`);

// Изменяем яркость настольной лампы
myDeskLamp.setBrightness('умеренная');

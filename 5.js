// Родительский класс для электроприборов
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name; // Имя прибора
        this.power = power; // Мощность в ваттах
        this.isOn = false; // Статус прибора (включен/выключен)
    }

    // Метод для включения прибора
    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.name} включен.`);
        } else {
            console.log(`${this.name} уже включен.`);
        }
    }

    // Метод для выключения прибора
    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            console.log(`${this.name} выключен.`);
        } else {
            console.log(`${this.name} уже выключен.`);
        }
    }

    // Метод для получения потребляемой мощности
    getPowerConsumption() {
        return this.isOn ? this.power : 0;
    }
}

// Класс для настольной лампы
class DeskLamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power); // Вызов родительского конструктора
        this.brightness = brightness; // Яркость лампы
    }

    // Метод для изменения яркости
    setBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`${this.name} теперь с яркостью: ${this.brightness}`);
    }
}

// Класс для компьютера
class Computer extends ElectricalAppliance {
    constructor(name, power, hasMonitor) {
        super(name, power); // Вызов родительского конструктора
        this.hasMonitor = hasMonitor; // Наличие монитора
    }
}

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

// Класс Motorcycle, наследующий от Vehicle
class Motorcycle extends Vehicle {
    type: string;

    constructor(make: string, model: string, type: string) {
        super(make, model); // Вызов конструктора родительского класса
        this.type = type;
    }
}

// Пример использования
const myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", "Cruiser");
console.log(`Motorcycle: ${myMotorcycle.make} ${myMotorcycle.model}, Type: ${myMotorcycle.type}`);
// Класс Dog, наследующий от Animal
class Dog extends Animal {
    breed: string;

    constructor(name: string, species: string, breed: string) {
        super(name, species); // Вызов конструктора родительского класса
        this.breed = breed;
    }

    sound(): void {
        console.log("The dog barks");
    }
}

// Пример использования
const myDog = new Dog("Buddy", "Dog", "Golden Retriever");
myDog.sound(); // "The dog barks"
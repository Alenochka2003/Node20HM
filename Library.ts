// Класс Library
class Library {
    static totalBooks: number = 0;

    constructor() {
        // Конструктор не требуется для учета книг
    }

    static addBook(): void {
        Library.totalBooks++;
    }
}

// Пример использования
const library1 = new Library();
Library.addBook();
Library.addBook();
console.log(`Total books in the library: ${Library.totalBooks}`); // "Total books in the library: 2"

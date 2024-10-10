// Класс Library
var Library = /** @class */ (function () {
    function Library() {
        // Конструктор не требуется для учета книг
    }
    Library.addBook = function () {
        Library.totalBooks++;
    };
    Library.totalBooks = 0;
    return Library;
}());
// Пример использования
var library1 = new Library();
Library.addBook();
Library.addBook();
console.log("Total books in the library: ".concat(Library.totalBooks)); // "Total books in the library: 2"

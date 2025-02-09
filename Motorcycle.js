var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Класс Motorcycle, наследующий от Vehicle
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, type) {
        var _this = _super.call(this, make, model) || this; // Вызов конструктора родительского класса
        _this.type = type;
        return _this;
    }
    return Motorcycle;
}(Vehicle));
// Пример использования
var myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", "Cruiser");
console.log("Motorcycle: ".concat(myMotorcycle.make, " ").concat(myMotorcycle.model, ", Type: ").concat(myMotorcycle.type));

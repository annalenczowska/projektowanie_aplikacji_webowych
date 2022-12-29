let person = {              /*tworzenie obiektu przez notację lterału*/
    firstName: 'Jan',
    lastName: 'Nowak',
    introduce: function (){
        console.log('Nazywam się ' + this.firstName + ' ' + this.lastName);
    },
};

person.introduce();
person.firstName = 'Adam';
person.introduce();

console.log('---------------------------------')

/*tworzenie obiektu przez notację konstruktora*/
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    /*właściwość obiektu = parametr*/

    this.showDetails = function () {
        console.log('Car: ' + this.brand + ' ' + this.model);
    };
}

let car = new Car('fiat', '126p');
car.showDetails();

console.log('---------------------------------');

/*tworzenie obiektów przez klasę*/

class House {
    constructor(windows, doors) {
        this.windows = windows;
        this.doors = doors;
    }

    showDetails() {
        console.log('Dom ma: '  + this.windows + ' okien i ' + this.doors + ' drzwi.')
    }
}

let house = new House(2, 6);
house.showDetails();
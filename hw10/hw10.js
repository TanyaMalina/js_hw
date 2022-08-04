const Car = function () {

    let speed = 0;
    let timeStart = 0;

    this.set = function (carBrand, number) {
        this.carBrand = carBrand;
        this.number = number;
    }

    this.motorOn = function (on) {
        this.motor = on;
    }

    this.setTransmission = function (position) {

        switch (position) {
            case 'вперед':
            case 'назад':this.transmission = position;
                break;
            default: this.transmission = 'нейтральная';
        }
    }

    this.setSpeed = function (curSpeed) {
        speed = curSpeed;
        if (speed !== 0 ) timeStart = new Date();
    }

    this.getKilometers = function () {
        let currentTime = new Date();
        console.log(speed * (currentTime - timeStart)/1000/60/60 + ' км.');
    }
}

let newCar = new Car();

// newCar.set('Ford', '12345');
// newCar.motorOn(true);
// newCar.setTransmission('вперед');
// newCar.setSpeed(100);
// newCar.getKilometers();


const Truck = function () {
    Car.apply(this);

    let parentSet = this.set;

    this.set = function (carBrand, number, carrying) {
        parentSet.call(this);
        parentSet();
        this.carrying = carrying;
    }
}

let newTruck = new Truck();
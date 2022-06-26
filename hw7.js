/*Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.*/

let Car = function () {

    this.set = function (carBrand, number) {
        this.speed = 0;
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

    this.setSpeed = function (speed) {
        this.speed = speed;
        this.timeStart = 0;
        (this.speed === 0 ) ? this.timeStart = 0 : this.timeStart = new Date() - 3*60*60*1000;
    }

    this.getKilometers = function () {
       let currentTime = new Date();
       console.log(this.speed * (currentTime - this.timeStart)/1000/60/60 + ' км.');
    }
}

let newCar = new Car();

newCar.set('Ford', '12345');
newCar.motorOn(true);
newCar.setTransmission('вперед');
newCar.setSpeed(100);
newCar.getKilometers();


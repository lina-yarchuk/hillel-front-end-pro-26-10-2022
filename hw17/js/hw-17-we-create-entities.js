document.addEventListener('DOMContentLoaded', () => {
    class Human {

        constructor(humanName, humanAge) {
            this.humanName = humanName;
            this.humanAge = humanAge;
        }
        aboutHuman() {
            console.log(`${this.humanName} is ${this.humanAge} years old`)
        }
    }

    class Car extends Human {
        constructor(brand, model, year, licensePlate) {
            super();
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.licensePlate = licensePlate;
        }
        carOwner(human) {
            this.human = human;
            if (human.humanAge >= 18) {
                human.aboutHuman()
            } else{
                console.log('Not yet 18')
            }
        }
        aboutCar(){
            console.log(this.brand, this.model, this.year, this.licensePlate)
            this.carOwner(this.human)
        }
    }

    const dina = new Human('Dina', 30)
    const nika = new Human('Nika', 40)
    const vika = new Human('Vika', 25)
    const lena = new Human('Lena', 16)

    const subaru = new Car('subaru', 'outback', 2021, 'AE452545HD')
    const hyundai = new Car('hyundai', 'solaris', 2021, 'AO85254HD')
    const mazda = new Car('mazda', 'cx5', 2018, 'AN851236HD')
    const tyota = new Car('toyota', 'XK5', 2020, 'AN963252HD')

    subaru.carOwner(dina)
    subaru.aboutCar()
    hyundai.carOwner(nika)
    hyundai.aboutCar()
    mazda.carOwner(vika)
    mazda.aboutCar()
    tyota.carOwner(lena)
    tyota.aboutCar()

});

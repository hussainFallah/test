class defulteCar {
    _id;
    id;
    location;
    name;
    owner;
    dateAvailable;
    phone;
    typeCar;
    dimension;
    capacity;
    status;
    home;
    zipCode;
    locationName;
    active;
    note;
    __v;
};
let apiHandler = {
    apiUrl: "",
    editCar: function (_oldCar, _newCar) {
        fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                method: "editCar",
                oldCar: _oldCar,
                newCar: _newCar
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    },
    addCar: function (_car) {

        fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                method: "addCar",
                newCar: _newCar
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    },

}
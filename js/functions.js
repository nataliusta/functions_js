let passengers = [ 
    {name: 'Jane', ticket: 'firstclass', paid: true},
    {name: 'Jane', ticket: 'coach', paid: true},
    {name: 'Jane', ticket: 'firstclass', paid: false},
    {name: 'Jane', ticket: 'premium', paid: true}
    ];

function createDrinkOrder(passenger) { // function for drinks order
    let orderFunction;

    if (passenger.ticket === 'firstclass') {
        orderFunction = function() {
            alert('Would you ilke cocktail or wine?');
        };
    } else if (passenger.ticket === 'premium') {
        orderFunction = function() {
            alert('Lemonade,water or wine?');
        };
    } else {
        orderFunction = function() {
            alert('Cola or water');
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) { // function for dinner order
    let orderFunction;

    if (passenger.ticket === 'firstclass') {
        orderFunction = function() {
            alert('Chicken or pasts?');
        };
    } else if (passenger.ticket === 'premium') {
        orderFunction = function() {
            alert('Snacks or cheese plate?');
        };
    } else {
        orderFunction = function() {
            alert('Nuts or dry bread?');
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createdinnerOrder(passenger);

    getDrinkOrderFunction();
    getDinnerOrderFunction();
    // open the movie
    getDrinkOrderFunction();
    // others
}

function servePassengers(passengers) { // checking all index in passengers array
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);
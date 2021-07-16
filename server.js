const express = require("express");
const faker = require("faker")
const app = express();
const port = 8000;

class Customer {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json( new Customer );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company );
});

app.get("/api/user/company", (req, res) => {
    res.json( {customer: new Customer, company: new Company} );
});




app.listen( port, () => console.log(`Listening on port: ${port}`) );
const cervezas = require("../db/cervezas.json");

const getAll = () => {
    return cervezas;
}

const getById = (id) => {
    const cerveza = cervezas.find(beer =>
        beer.id == id
    );

    return cerveza;
}

module.exports = {
    getAll,
    getById
}
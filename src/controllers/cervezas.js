const cervezasRepository = require("../repositories/cervezas");

const getAll = (req, res) => {
    try {
        const cervezas = cervezasRepository.getAll();
        return res.status(200).json(cervezas);
    }
    catch(err) {
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

const getById = (req, res) => {
    try {
        const id = req.params.id;
        const cerveza = cervezasRepository.getById(id);

        if(cerveza === undefined) {
            return res.status(404).json({
                msg: "Beer Not Found"
            })
        }

        return res.status(200).json(cerveza);
    }
    catch(err) {
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

module.exports = {
    getAll,
    getById,
}
const db = require('../../db/models/index.js');
const {winston} = require('../../../lib/winston');
const log = winston('log.log');

const createUser = async (req, res) => {
    try {
        const dataExist = await db.User.findOne({
            where: {
                ...req.body.name
            }
        });

        if (dataExist) {
            log.log("info", `fail user exist`);
            return res.status(500).json({})
        }

        log.log("info",`create user: ${req.body}`);
        const data = await db.User.create({
            name: req.body.name,
            password: req.body.password,
            mail: req.body.mail
        });
        log.log("info",`success user was created: ${data}`);
        return res.status(201).json({});
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const deleteUser = async (req, res) => {
    try {
        log.log("info",`delete user by id: ${req.params.id}`);
        await db.User.destroy({
            where: {
                id: req.params.id
            }
        });
        log.log("info",`success user was deleted`);
        return res.status(200).json({});
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const getUserByParam = async (req, res) => {
    try {
        log.log("info",`Searching name: ${req.body}`);

        const data = await db.User.findOne({
            where: {
                ...req.body
            }
        });

        if (data) {
            log.log("info", `ok ${data}`);
            return res.status(200).json(data);
        } else {
            log.log("info", `fail ${error}`);
            return res.status(500).json({});
        }

    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const allUsers = async (req, res) => {
    try {
        const data = await db.User.findAll();
        log.log("info",`getAllUsers ${data}`);
        return res.status(200).json(data);
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const getUsersSlice = async (req, res) => {
    try {
        const data = await db.User.findAll();
        let {
            from,
            to
        } = req.params;

        if (from < 0) {
            from = 0;
        }
        if (to > data.length) {
            to = data.length;
        }

        return res.status(200).json(data.slice(from, to));
    } catch (error) {
        return res.status(500).json({})
    }
};

module.exports = {
    createUser,
    deleteUser,
    getUserByParam,
    allUsers,
    getUsersSlice
};

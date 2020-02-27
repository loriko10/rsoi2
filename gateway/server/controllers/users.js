const api = require('../libs/api');
const USER_DB = 'http://localhost:8001/users';
const {winston} = require('../../../lib/winston');
const log = winston('log.log');
const getUrl = (path) => `${USER_DB}${path}`;

const login = async (req, res) => {
    const {
        name,
        password
    } = req.body;

    log.log("info",`user login name: ${req.body.name}, password: ${req.body.password}`);
    if (!name || !password) {
        log.log("info",`fail login`);
        return res.status(403).json({message: 'Login or password is empty!'});
    }

    await api.post(getUrl(`/get`), {
        name
    }).then(user => {
        log.log("info",`user from userDB: ${user}`);
        console.log('user password', user.password, password);
        if (user.password === password) {
            log.log("info",`user login success: ${name}`);
            return res.status(200).json({
                uid: user.id,
                name
            });
        } else {
            log.log("info",`user login fail: password incorrect`);
            return res.status(403).json({message: 'Incorrect login or password'});
        }
    }).catch(err => {
        log.log("info",`user login fail: ${err}`);
        return res.status(403).json({message: 'Incorrect login or password'});
    });
};

const register = async (req, res) => {
    const {
        name,
        password,
        mail
    } = req.body;

    log.log("info",`user register by name: ${req.body.name}`);
    if (!name || !password || !mail) {
        log.log("info",`fail register`);
        return res.status(500).json({message: 'Name, password or mail is empty!'});
    }

    await api.post(getUrl('/create'), {
        name,
        password,
        mail
    })
    .then((user) => {
        log.log("info",`user from userDB: ${user}`);
        return res.status(201).json(user);
    })
    .catch(err => {
        log.log("info",`user register fail: ${err}`);
        res.status(500).json({message: 'Login exist'})
    });
};

const allUsers = async (req, res) => {
    await api.get(getUrl('/all'))
        .then(data => {
            log.log("info", `success all users`);
            res.status(200).json(data)
        })
        .catch(err => {
            log.log("info",`fail ${err}`);
            return res.status(500).json({message: err.message});
        });
};

const allUsersFromTo = async (req, res) => {
    let {
        from,
        to
    } = req.params;
    await api.get(getUrl(`/all/from/${from}/to/${to}`))
        .then((data) => {
            log.log("info", `success all users`);
            return res.status(200).json(data)
        })
        .catch(err => {
            log.log("info", `fail ${err}`);
            res.status(500).json({message: 'some error'})
        });
};

const getUserById = async (id) => {
    return await api.post(getUrl(`/get`), {id})
};

const deleteUser = async (id) => {
    return await api.post(getUrl(`/delete/${id}`), {})
};

module.exports = {
    login,
    register,
    allUsers,
    allUsersFromTo,
    getUserById,
    deleteUser
};

const db = require('../../db/models/index.js');
const {winston} = require('../../../lib/winston');
const log = winston('log.log');

const createQuestion = async (req, res) => {
    try {
        log.log("info",`create question for uid: ${req.body.qid}`);
        const data = await db.Question.create({
            uid: req.body.uid,
            title: req.body.title,
            text: req.body.text,
            tag: req.body.tag,
            date: req.body.date
        });
        log.log("info",`success question was created: ${data}`);
        return res.status(201).json({});
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const deleteQuestion = async (req, res) => {
    try {
        log.log("info",`delete question by id: ${req.params.id}`);
        await db.Question.destroy({
            where: {
                id: req.params.id
            }
        });
        log.log("info",`success question was deleted`);
        return res.status(200).json({});
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const allQuestion = async (req, res) => {
    try {
        const data = await db.Question.findAll();
        log.log("info",`getAllQuestions ${data}`);
        return res.status(200).json(data);
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const getQuestionByParam = async (req, res) => {
    try {
        const data = await db.Question.findAll({
            where: {
               ...req.body
            }
        });
        log.log("info",`getQuestionByParam ${data}`);
        return res.status(200).json(data);
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

const deleteQuestionByUser = async (req, res) => {
    try {
        log.log("info",`delete question by uid: ${req.params.id}`);
        await db.Question.destroy({
            where: {
                uid: req.params.id
            }
        });
        log.log("info",`success question was deleted`);
        return res.status(200).json({});
    } catch (err) {
        log.log("info", `fail ${err}`);
        return res.status(500).json({})
    }
};

module.exports = {
    createQuestion,
    deleteQuestion,
    allQuestion,
    getQuestionByParam,
    deleteQuestionByUser
};

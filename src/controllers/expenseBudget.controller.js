const getAll = require('../helpers/db/getAll');
const getByID = require('../helpers/db/getByID');
const deleteByID = require('../helpers/db/deleteByID');
const updateByID = require('../helpers/db/updateByID');
const create = require('../helpers/db/create');

const get = (req, res) => getAll(req, res, 'expenseBudget');

const getOne = (req, res) => getByID(req, res, 'expenseBudget');

const put = (req, res) => {
	req.body.lastEditBy = req.local.userID;
	updateByID(req, res, 'expenseBudget');
};

const remove = (req, res) => deleteByID(req, res, 'expenseBudget');

const post = (req, res) => {
	req.body.addedBy = req.local.userID;
	create(req, res, 'expenseBudget');
};

module.exports = {
	get,
	getOne,
	put,
	remove,
	post,
};
const getAll = require( '../helpers/db/getAll');
const getByID = require( '../helpers/db/getByID');
const deleteByID = require( '../helpers/db/deleteByID');
const updateByID = require( '../helpers/db/updateByID');
const create = require( '../helpers/db/create');

const get = (req, res) => getAll(req, res, 'incomeBudget');

const getOne = (req, res) => getByID(req, res, 'incomeBudget');

const put = (req, res) => updateByID(req, res, 'incomeBudget');

const remove = (req, res) => deleteByID(req, res, 'incomeBudget');

const post = (req, res) => create(req, res, 'incomeBudget');

module.exports = {
	get,
	getOne,
	put,
	remove,
	post,
};
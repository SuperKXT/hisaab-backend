const mongoose = require( 'mongoose');

const Schema = mongoose.Schema;

const fkAddValidator = require('../helpers/fkAddValidator');

const ExpenseBudget = new mongoose.Schema(
	{
		expenseCategory: {
			type: Schema.Types.ObjectId,
			ref: 'expenseCategory',
			required: true,
			validate: {
                validator: (id) => (
					fkAddValidator(mongoose.model('expenseCategory'), id, 'expenseCategory')
				),
            },
		},
		year: {
			type: Number,
			required: true,
			min: 0,
		},
		month: {
			type: Number,
			required: true,
			min: 1,
			max: 12,
		},
		amount: {
			type: Number,
			required: true,
			min: 0,
		},
		description: {
			type: String,
		},
		addedBy: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			validate: {
                validator: (id) => (
					fkAddValidator(mongoose.model('user'), id, 'user')
				),
            },
		},
		lastEditBy: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			validate: {
                validator: (id) => (
					fkAddValidator(mongoose.model('user'), id, 'user')
				),
            },
		},
		household: {
			type: Schema.Types.ObjectId,
			ref: 'household',
			required: true,
			immutable: true,
			validate: {
                validator: (id) => (
					fkAddValidator(mongoose.model('household'), id, 'household')
				),
            },
		},
	},
	{
		timestamps: true,
	},
);

ExpenseBudget.index(
	{
		expenseCategory: 1,
		year: 1,
		month: 1,
		household: 1,
	},
	{
		unique: true,
	},
);

module.exports = ExpenseBudget;
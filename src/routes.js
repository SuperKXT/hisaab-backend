const express = require( 'express');
const fs = require( 'fs');

const router = express.Router();

const { consoleFGGreen, consoleFGReset, consoleFGMagenta } = require('./helpers/constants');

const mapRoutes = (next) => {

	const routeList = fs.readdirSync('./src/routes', { encoding: 'utf-8', });

	console.log();

	const routeMap = routeList.map(route => {

		const routeName = route.split('.')[0]
			, routeFile = route.replace('.js', '');

		console.log(`Route ${consoleFGGreen}/${routeName}${consoleFGReset} Mapped To ${consoleFGMagenta}/routes/${routeFile}.js${consoleFGReset}`);

		return router.use(`/${routeName}`, require(`./routes/${routeFile}`));

	});

	console.log();

	if(routeMap.length === 0) return next();

	return routeMap;

};

module.exports = mapRoutes;

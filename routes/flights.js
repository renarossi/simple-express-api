const flightRoutes = (app, fs) => {
	const dataPath = './data/flights.json';

	app.get('/flights', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}

			res.send(JSON.parse(data));
		})
	});
};

module.exports = flightRoutes;
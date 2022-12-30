const aircraftsRoutes = (app, fs) => {
	const dataPath = './data/aircrafts.json';

	app.get('/aircrafts', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}

			res.send(JSON.parse(data));
		})
	});
};

module.exports = aircraftsRoutes;
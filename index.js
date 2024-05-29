const express = require('express');
const fields = require('./fields');
const {
	generateParcelTable,
	irrigatedParcels,
	howManyIrrigatedParcels,
} = require('./algo');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.render('home', { fields, pageTitle: 'Home Fields' });
});

app.get('/field/:fieldName', (req, res) => {
	const { fieldName } = req.params;
	const field = fields.find((field) => field.name === fieldName);
	if (!field) {
		res.status(404).send('Field not found');
		return;
	}

	const newParcels = generateParcelTable(field);

	const treatedParcels = irrigatedParcels(newParcels);
	console.log(treatedParcels);

	const nbIrrigatedParcels = howManyIrrigatedParcels(treatedParcels);

	console.log(nbIrrigatedParcels);

	res.render('field', {
		parcels: newParcels,
		nbIrrigatedParcels: nbIrrigatedParcels,
		pageTitle: field.name,
	});
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

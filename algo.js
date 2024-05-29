const generateParcelTable = ({ size, parcels }) => {
	const newParcel = [];

	for (let i = 0; i < size; i++) {
		const row = parcels.slice(i * size, (i + 1) * size);
		newParcel.push(row);
	}

	return newParcel;
};

const irrigatedParcels = (parcels) => {
	for (let y = 0; y < parcels.length; y++) {
		for (let x = 0; x < parcels[y].length; x++) {
			if (parcels[y][x] === 'O') {
				if (parcels[y][x + 1] === 'X') {
					parcels[y][x + 1] = 'C';
				}
				if (parcels[y][x - 1] === 'X') {
					parcels[y][x - 1] = 'C';
				}
				if (parcels[y + 1] && parcels[y + 1][x] === 'X') {
					parcels[y + 1][x] = 'C';
				}
				if (parcels[y + 1] && parcels[y + 1][x - 1] === 'X') {
					parcels[y + 1][x - 1] = 'C';
				}
				if (parcels[y + 1] && parcels[y + 1][x + 1] === 'X') {
					parcels[y + 1][x + 1] = 'C';
				}
				if (parcels[y - 1] && parcels[y - 1][x] === 'X') {
					parcels[y - 1][x] = 'C';
				}
				if (parcels[y - 1] && parcels[y - 1][x - 1] === 'X') {
					parcels[y - 1][x - 1] = 'C';
				}
				if (parcels[y - 1] && parcels[y - 1][x + 1] === 'X') {
					parcels[y - 1][x + 1] = 'C';
				}
			}
		}
	}
	return parcels;
};

const howManyIrrigatedParcels = (parcels) => {
	let nbIrrigatedParcels = 0;

	for (let y = 0; y < parcels.length; y++) {
		for (let x = 0; x < parcels[y].length; x++) {
			if (parcels[y][x] === 'C') {
				nbIrrigatedParcels++;
			}
		}
	}
	return nbIrrigatedParcels;
};

module.exports = {
	generateParcelTable,
	irrigatedParcels,
	howManyIrrigatedParcels,
};

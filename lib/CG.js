import DC from "distinct-color";

export default function(dataSet) {
	var colors = {};


	dataSet.forEach( (element) => {
		
		if(!colors[element.who]) {
			colors[element.who] = 'black';
		}
	});

	var palette = DC({count: Object.keys(colors).length, quality: 100, lightMin: 30})

	Object.keys(colors).forEach(function (key, i) {
		colors[key] =  palette[i].hex();
	});

	return colors;
}
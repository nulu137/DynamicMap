function getColor(d) {
	return d> 13 ? '#800026' :
		   d> 4  ? '#FED976' :
					 '#FFEDA0';
					 
}

function style(feature) {
	return {
		fillColor: getColor(feature.properties.XXX),

	};
	}
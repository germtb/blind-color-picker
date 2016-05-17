#! /usr/bin/env babel-node
const palette = [
	{
		c: '#FFFFFF',
		name: 'Theme-light-text'
	},
	{
		c: {r: 122, g: 122, b: 122},
		name: 'Theme-light-dark'
	},
	{
		c: {r: 0, g: 0, b: 0},
		name: 'Theme-light-bg'
	},
];

const toDecimal = function(hex) {
	if (hex == '0') {
		return 0;
	} else if (hex == '1') {
		return 1;
	} else if (hex == '1') {
		return 2;
	} else if (hex == '2') {
		return 3;
	} else if (hex == '3') {
		return 4;
	} else if (hex == '4') {
		return 5;
	} else if (hex == '5') {
		return 6;
	} else if (hex == '6') {
		return 7;
	} else if (hex == '7') {
		return 8;
	} else if (hex == '8') {
		return 9;
	} else if (hex == '9') {
		return 10;
	} else if (hex == 'A') {
		return 10;
	} else if (hex == 'B') {
		return 11;
	} else if (hex == 'C') {
		return 12;
	} else if (hex == 'D') {
		return 13;
	} else if (hex == 'E') {
		return 14;
	} else if (hex == 'F') {
		return 15;
	}
}

const toRGB = function(color) {
	if (color[0] != '#') {
		return color;
	}
	return {
		r: (toDecimal(color.substring(1, 2)) * 16) + toDecimal(color.substring(2, 3)),
		g: (toDecimal(color.substring(3, 4)) * 16) + toDecimal(color.substring(4, 5)),
		b: (toDecimal(color.substring(5, 6)) * 16) + toDecimal(color.substring(6, 7)),
	}
}

const colorDistance = function(color1, color2) {
	return Math.sqrt(color1.r * color2.r
		+ color1.g * color2.g
		+ color1.b * color2.b) / Math.sqrt(3) / 255;
}

const blindColor = toRGB(process.argv[2]);

const sortedPalette = palette.map(c => {return {
	color: c,
	distance: colorDistance(toRGB(c.c), blindColor)
}}).sort((c1, c2) => c1.distance - c2.distance);

console.log(sortedPalette);

export default function () {
	const facetSwatchMap = [
		{ name: "Black", color: "#000000" },
		{ name: "Blue", color: "#0000ff" },
		{ name: "Brown", color: "#CD853F" },
		{ name: "Green", color: "#008000" },
		{ name: "Navy", color: "#000080" },
		{ name: "Red", color: "#800000" },
		{ name: "Teal", color: "#008080" },
		{ name: "Grey", color: "#828282" },
		{ name: "Light Grey", color: "#b0b0b0" },
		{ name: "Dark Grey", color: "#414141" },
		{ name: "Tan", color: "#D2B48C" },
		{ name: "Taupe", color: "#D2B48C" },
		{ name: "Pink", color: "#F79CBF" },
		{ name: "White", color: "#ffffff" },
		{ name: "Periwinkle", color: "rgba(204,204,255,1)" },
		{ name: "Pewter", color: "#E9EAEC" },
		{ name: "Dark Brown", color: "#4b2b2b" },
		{ name: "Bone", color: "#e3dac9" },

		{
			name: "White/Grey",
			color:
				"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, #AFAFAF 48%, #AFAFAF 100%)",
		},
		{
			name: "White/Periwinkle",
			color:
				"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, rgba(204,204,255,1) 48%, rgba(204,204,255,1) 100%)",
		},
		{
			name: "White/Blue",
			color:
				"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, rgba(0,0,255,1) 48%, rgba(0,0,255,1) 100%)",
		},
		{
			name: "Brown/Blue",
			color:
				"linear-gradient(180deg, #4b2b2b 0%, #4b2b2b 52%, #0000ff 52%, #0000ff 100%)",
		},
		{
			name: "Brown/Pink",
			color:
				"linear-gradient(180deg, #4b2b2b 0%, #4b2b2b 52%, #F79CBF 52%, #F79CBF 100%)",
		},
		{
			name: "Grey/Purple",
			color:
				"linear-gradient(180deg, #AFAFAF 0%, #AFAFAF 52%, rgba(128,0,128,1) 52%, rgba(128,0,128,1) 100%)",
		},
		{
			name: "Silver/Blue",
			color:
				"linear-gradient(180deg,  rgba(192,192,192,1) 0%, rgba(192,192,192,1) 52%, rgba(0,0,255,1) 52%, rgba(0,0,255,1) 100%)",
		},
		{
			name: "Silver/Sea Blue",
			color:
				"linear-gradient(180deg,  rgba(192,192,192,1) 0%, rgba(192,192,192,1) 52%, rgba(0,105,148,1) 52%, rgba(0,105,148,1) 100%)",
		},
		{
			name: "Black Croc",
			color:
				"url(//cdn11.bigcommerce.com/s-dhod3a8/content/menu/BlackCrock.png) no-repeat center",
		},
	];

	let convertFacetColor = (colorName) => {
		var background = facetSwatchMap.filter((e) => {
			return e.name === colorName;
		});
		return background && background.length ? background[0].color : "";
	};

	let colorSwatch = $(".content.Color li>a").get();
	if (colorSwatch && colorSwatch.length) {
		colorSwatch.forEach((elem) => {
			elem.style.background = convertFacetColor(
				elem.dataset.facetedValue
			);
		});
	}
}

const colorThemeRadios = document.querySelectorAll("aside input");

function handleColorThemeRadioChange(e) {	
	localStorage.setItem("colorTheme", e.currentTarget.value);
}

function getStoredColorTheme() {
	const storedColorTheme = localStorage.getItem("colorTheme");
	
	if(storedColorTheme) {
		const storedColorThemeRadio = document.querySelector('[name="color-theme"][value="' + storedColorTheme + '"]');
		storedColorThemeRadio.checked = true;
	}
}

function iniColorTheme() {
	getStoredColorTheme();

	colorThemeRadios.forEach(colorThemeRadio => {
		colorThemeRadio.onchange = handleColorThemeRadioChange;
	});
}

iniColorTheme();
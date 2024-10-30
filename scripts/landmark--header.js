const menu = document.querySelector('menu');
const buttons = menu.querySelectorAll('button');
const theThing = document.querySelector('.thé-thing');





////////////
// ESCAPE //
////////////

document.onkeydown = handleKeyDown;

function handleKeyDown(e) {
	if (e.key == "Escape") {
		const currentButton = document.querySelector('[aria-pressed="true"]');
		if (currentButton) {
			const currentMode = currentButton.value;

			switchButtons(currentButton, false, currentMode, false);
			switchModes(currentMode, false);
		}
	}
};





/////////////
// KLIKKEN //
/////////////

buttons.forEach(button => {
	button.onclick = handleButtonClick;
});


function handleButtonClick(e) {
	const newButton = e.currentTarget;
	const currentButton = menu.querySelector('[aria-pressed=true]');
	
	// determine current & new mode //

	let currentMode, newMode;

	if ( currentButton ) {
		currentMode = currentButton.value;
	} else {
		currentMode = false;
	}

	if ( currentButton == newButton ) {
		newMode = false;
	} else {
		newMode = newButton.value;
	}

	switchButtons(currentButton, newButton, currentMode, newMode);
	switchModes(currentMode, newMode);
}





////////////////////
// SWITCH BUTTONS //
////////////////////

function switchButtons(currentButton, newButton, currentMode, newMode) {

	// add and/or remove pressed //

	if ( newMode == false ) {
		currentButton.ariaPressed = false;
	} else {
		newButton.ariaPressed = true;
		if ( currentMode != false ) {
			currentButton.ariaPressed = false;
		}
	}
}





//////////////////
// SWITCH MODES //
//////////////////

function switchModes(currentMode, newMode) {

	closeCurrentMode();



  ////////////////////////
	// CLOSE CURRENT MODE //
	////////////////////////

	function closeCurrentMode() {

		if (currentMode) {

			////////////
			// always //
			////////////

			closeInfo();
			document.documentElement.dataset.modeStatus = false;

			/////////////////
			// close tools //
			/////////////////
			if (currentMode == "tools") {
				disableButtons();
				setTimeout(() => {
					document.documentElement.dataset.mode = false;
					openNewMode();
				}, 1350);
			}

			//////////////////////
			// close accessible //
			//////////////////////
			else if (currentMode == "accessible") {
				// disableButtons();

				setTimeout(() => {
					document.documentElement.dataset.mode = false;
					openNewMode();
				}, 200);
			}
			
			//////////////////////
			// close responsive //
			//////////////////////
			else if (currentMode == "responsive") {
				

				if (theThing.hasAttribute("style")) {
					theThing.removeAttribute("style");
					disableButtons();

					setTimeout(() => {
						document.documentElement.dataset.mode = false;
						openNewMode();
					}, 1300);
				}
				
				else {
					setTimeout(() => {
						document.documentElement.dataset.mode = false;
						openNewMode();
					}, 200);
				}

			}

			//////////////////////
			// close performant //
			//////////////////////
			else if (currentMode == "performant") {
				disableButtons();

				setTimeout(() => {
					document.documentElement.dataset.mode = false;
					openNewMode();
				}, 1300);
			}
			
		}

		else {
			openNewMode();
		}

	}



	///////////////////
	// OPEN NEW MODE //
	///////////////////

	function openNewMode() {
		if (newMode) {

			////////////
			// always //
			////////////
			document.documentElement.dataset.mode = newMode;

			setTimeout(() => {
				document.documentElement.dataset.modeStatus = true;
			
				////////////////
				// open tools //
				////////////////
				if (newMode == "tools") {
					disableButtons();

					setTimeout(() => {
						enableButtons();
					}, 2100);
				}

				/////////////////////
				// open accessible //
				/////////////////////
				if (newMode == "accessible") {
					disableButtons();

					setTimeout(() => {
						enableButtons();
					}, 0);
				}
				
				/////////////////////
				// open responsive //
				/////////////////////
				else if (newMode == "responsive") {
					setTimeout(() => {
						enableButtons();
					}, 0);
				}
				
				/////////////////////
				// open performant //
				/////////////////////
				if (newMode == "performant") {
					disableButtons();

					setTimeout(() => {
						enableButtons();
					}, 2100);
				}

			}, 50);
		}

		else {
			enableButtons();
		}
	}



	//////////////////////////////////
	// CLOSE INFO / DETAILS/SUMMARY //
	//////////////////////////////////

	function closeInfo() {
		const openInfo = document.querySelector(".info[open]");
		if (openInfo) {
			openInfo.open = false;
		}

	}



	////////////////////
	// DISABLE BUTTON //
	////////////////////

	function disableButtons() {
		buttons.forEach(button => {
			button.disabled = true;
		});
	}


	///////////////////
	// ENABLE BUTTON //
	///////////////////

	function enableButtons() {
		buttons.forEach(button => {
			button.disabled = false;
		});
	}
}
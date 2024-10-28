const websiteMenuButton = document.querySelector(".website header button");
const websiteHeader = document.querySelector(".website header");

function handleWebsiteMenuButtonClick() {
	websiteHeader.classList.toggle("is-open");
}

websiteMenuButton.onclick = handleWebsiteMenuButtonClick;
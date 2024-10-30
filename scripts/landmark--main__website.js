// MENU BUTTON

const websiteHeader = document.querySelector(".website header");
const websiteMenuButton = websiteHeader.querySelector("button");


websiteMenuButton.onclick = handleWebsiteMenuButtonClick;

function handleWebsiteMenuButtonClick() {
	websiteHeader.classList.toggle("is--open");
}





// HEADER LINKS

const website = document.querySelector(".website");
const websiteHeaderLinks = website.querySelectorAll("header a");

websiteHeaderLinks.forEach(websiteHeaderLink => {
	websiteHeaderLink.onclick = handleWebsiteHeaderLinkClick;
});


function handleWebsiteHeaderLinkClick(e) {
	e.preventDefault();

	const targetID = e.target.getAttribute("href");
	const targetElement = document.querySelector(targetID);
	const targetElementTop = targetElement.getBoundingClientRect().top;
	const websiteTop = website.getBoundingClientRect().top;
	const fontSize =  parseFloat( window.getComputedStyle(website).getPropertyValue('font-size') );

	website.scrollTop =  website.scrollTop + targetElementTop - (8.75 * fontSize) - websiteTop;
}
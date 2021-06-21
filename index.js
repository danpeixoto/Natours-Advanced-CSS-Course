const selectElement = (e) => document.querySelector(e);
const selectByID = (id) => document.getElementById(id);
const selectAllElementes = (e) => document.querySelectorAll(e);


const navToggle = selectElement(".navigation__checkbox");
const navLinks = selectAllElementes(".navigation__item");

navLinks.forEach(link => {
	link.addEventListener("click", () => {
		navToggle.checked = false;
	});
});

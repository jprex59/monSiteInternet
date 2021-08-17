let informatique = document.getElementById("informatique");
let juridique = document.getElementById("juridique");

/*****container****/
let containerInformatique = document.querySelector(".containerInformatique");
let containerJuridique = document.querySelector(".containerJuridique");

juridique.addEventListener("click", () => {
	juridique.classList.add("is-active");
	informatique.classList.remove("is-active");
	containerInformatique.classList.remove("open");
	containerJuridique.classList.add("open");
});

informatique.addEventListener("click", () => {
	informatique.classList.add("is-active");
	juridique.classList.remove("is-active");
	containerInformatique.classList.add("open");
	containerJuridique.classList.remove("open");
});

function Openinformatique() {
	containerInformatique.classList.add("open");
}

window.onload = Openinformatique();

/********************/
let tabs = document.querySelector(".tabs");
width = document.documentElement.clientWidth;

if (width < 400) {
	tabs.classList.remove("is-medium");
}

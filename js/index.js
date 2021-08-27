/******Greensock*************/
const medias = document.querySelectorAll(".medias");
const title = document.querySelector(".MainTitle");
const nav = document.querySelector("nav");
const imgResponsive = document.querySelector(".imgResponsive");
const img = document.querySelector(".img");
const information = document.querySelector(".information .subtitle");
const button = document.querySelector(".button-container");
const bg = document.querySelector(".bg");
window.addEventListener("load", () => {
	const TL = gsap.timeline({ paused: true });

	TL.from(nav, 1, { opacity: 0, y: -100, ease: "power2.out" })
		.from(title, 1, { opacity: 0, x: -100, ease: "power2.out" }, "-=0.3")
		.from(imgResponsive, 1, { transform: "scale(0)", ease: "power2.out" }, "-=0.8")
		.from(img, 1, { transform: "scale(0)", ease: "power2.out" }, "-=0.8")
		.from(information, 1, { opacity: 0, x: -200, ease: "power2.out" }, "-=0.8")
		.from(button, 1, { opacity: 0, x: -200, ease: "power2.out" }, "-=0.5")
		.from(bg, 1.5, { opacity: 0, backgroundColor: "#eef6fc", ease: "power2.out" }, "-=0.9")
		.staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.5, "-=1");
	TL.play();
});
function openModal(indexModal) {
	document.getElementById("Modal_" + indexModal).style.display = "flex";
}
function closeModal(indexModal) {
	document.getElementById("Modal_" + indexModal).style.display = "none";
}

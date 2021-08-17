/******Greensock*************/
const medias = document.querySelectorAll(".medias");
const title = document.querySelector(".MainTitle");
const nav = document.querySelector("nav");
const information = document.querySelector(".information .subtitle");
const button = document.querySelector(".button-container");
window.addEventListener("load", () => {
	const TL = gsap.timeline({ paused: true });

	TL.from(nav, 1, { opacity: 0, y: -100, ease: "power2.out" })
		.from(title, 1, { opacity: 0, x: -100, ease: "power2.out" }, "-=0.3")
		.from(information, 1, { opacity: 0, x: -200, ease: "power2.out" }, "-=0.8")
		.from(button, 1, { opacity: 0, x: -200, ease: "power2.out" }, "-=0.5")
		.staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.5, "-=1");
	TL.play();
});

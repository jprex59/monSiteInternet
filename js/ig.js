const arrow = document.querySelectorAll(".fa-chevron-up");
const more = document.querySelectorAll(".more");
const cover = document.querySelectorAll(".cover");

var ouverture = [];

for (let i = 0; i < more.length; i++) {
	ouverture[[i, 0]] = 0;
	ouverture[[i, 1]] = 0;

	more[i].addEventListener("click", () => {
		ouverture[[i, 0]] = ouverture[[i, 0]] + 1;
		ouverture[[i, 1]] = ouverture[[i, 0]] % 2;

		if (ouverture[[i, 1]] == 1) {
			cover[i].classList.add("is-active");
			arrow[i].classList.add("arrow_is-active");
			more[i].classList.add("more-is-active");
			more[i].style.transition = "background-color 0.7s";
		} else if (ouverture[[i, 1]] == 0) {
			cover[i].classList.remove("is-active");
			arrow[i].classList.remove("arrow_is-active");
			more[i].classList.remove("more-is-active");
			more[i].style.transition = "background-color 0s";
		}
		console.log(ouverture);
	});
}

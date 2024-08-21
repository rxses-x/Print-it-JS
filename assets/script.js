const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;

function showSlide(index) {
	const basePath = "./assets/images/slideshow/";
	const bannerImg = document.querySelector('.banner-img');
	const bannerText = document.querySelector('#banner p');

	currentIndex = index;

    // Mettre à jour l'image et le texte
    bannerImg.src = basePath + slides[currentIndex].image;
	bannerImg.alt = "Banner Print-it " + (index + 1)
    bannerText.innerHTML = slides[currentIndex].tagLine;

	document.querySelectorAll('.dot').forEach((dot, idx) => {
		dot.classList.toggle('dot_selected', idx === currentIndex);
	});
}

function createDots() {
	const dotsContainer = document.querySelector('.dots');

	// Générer les points (dots)
	slides.forEach((slide, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('dot_selected');
		dotsContainer.appendChild(dot);

		// Ajouter un événement de clic pour chaque point
		dot.addEventListener('click', () => {
			showSlide(index);
		});
	});
}

function initCarousel() {
	// Créer les points
	createDots();

	// Afficher la première diapositive
	showSlide(currentIndex);

	document.querySelector('.arrow_left').addEventListener('click', () => {
		currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
		showSlide(currentIndex);
	});
	
	document.querySelector('.arrow_right').addEventListener('click', () => {
		currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
		showSlide(currentIndex);
	});
}

// Initialiser le carrousel
initCarousel();
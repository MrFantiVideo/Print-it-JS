const slides =
[
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

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const paragraph = document.querySelector('p');

let index = 0;

arrowLeft.addEventListener('click', () => updateSlide('left'));
arrowRight.addEventListener('click', () => updateSlide('right'));

function updateSlide(direction)
{    
    index = (direction === 'left') ? (index - 1 + slides.length) % slides.length : (index + 1) % slides.length;
    const { image, tagLine } = slides[index];
    const imagePath = `assets/images/slideshow/${image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ` + (index + 1);
    paragraph.innerHTML = tagLine;
    updateDot(index);
}

function updateDot(index)
{
    dots.innerHTML = '';
    slides.forEach((slide, i) =>
    {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.classList.toggle('dot_selected', i === index);
        dots.appendChild(dot);
    });
}

updateDot(index);
/* --- Header Variables --- */

const hamburger = document.querySelector('.hamburger')
const h1 = document.querySelector('.ham1')
const h2 = document.querySelector('.ham2')
const h3 = document.querySelector('.ham3')
const burgerNav = document.querySelector('.burger-nav')
const burgerCurtain = document.querySelector('.burger-curtain')

const galleryImages = document.querySelectorAll('.gimg')


/* -- Burger Event Listeners -- */

hamburger.addEventListener('click', burgerToggle)
burgerCurtain.addEventListener('click', burgerToggle)

/* -- Burger Toggle Function -- */

function burgerToggle() {

    h1.classList.toggle('hh1')
    h2.classList.toggle('hh2')
    h3.classList.toggle('hh3')

    burgerNav.classList.toggle('nb-hide')
    burgerCurtain.classList.toggle('hide')

    h1.classList.toggle('h-color')
    h3.classList.toggle('h-color')

    h1.classList.toggle('burger-color')
    h3.classList.toggle('burger-color')
}



/* --- Gallery Images Events --- */
const modalBg = document.querySelector('.modal-bg')
const modalImg = document.querySelector('.modal-img')


galleryImages.forEach(img => {
    img.addEventListener('click', e => {

        modalBg.classList.toggle('modal-bg-off')
        modalImg.src = e.target.src;

    })
})


/* Modal background event listener */
modalBg.addEventListener('click', e => {

    if (e.target.classList.contains('modal')) modalBg.classList.toggle('modal-bg-off')
})






/* --- Intersections Observering --- */

const cta = document.querySelector('.cta')
const aboutH2 = document.querySelector('.about-me-1 h2')
const aboutH2Line = document.querySelector('.h2-underline')
const aboutBtn = document.querySelector('.about-btn')
const aboutCamera = document.querySelector('.camera')
const aboutImg = document.querySelector('.about-img')


/* --- About Observing --- */

let h2Observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {
        entries[0].target.style.animation = 'anim1 1.5s ease forwards'
        window.innerWidth > 1000 ? aboutH2Line.style.animation = 'h2LineAnim 1.2s 0.9s ease forwards' : null
        aboutImg.style.animation = 'fromTop 1.5s 1s ease forwards'

        h2Observer.disconnect()
    }

}, { threshold: 0.2 })

h2Observer.observe(aboutH2)


/* --- About p tags Observing --- */

const ps = document.querySelectorAll('.about-p')
let delay = 1.25;


const pObserver = new IntersectionObserver(entries => {

    entries.forEach(en => {

        if (en.isIntersecting) {
            en.target.style.animation = `fromLeft 2s ${delay}s forwards`;
            delay += 0.5;
        }
    })
})

ps.forEach(p => {
    pObserver.observe(p)
})
pObserver.observe(aboutCamera)
pObserver.observe(aboutBtn)



/* --- Gallery Observing --- */

const galImgs = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.animation = 'imgAnim 0.9s ease forwards'
        }
    })
})

galleryImages.forEach(img => galImgs.observe(img))



/* --- Pricing Observing --- */

const pricingH2 = document.querySelector('.pricing h2')
const pricings = document.querySelectorAll('.item-cont')
let pricingDelay = 0.3;

const pricingsObs = new IntersectionObserver(entries => {

    if (window.innerWidth > 1000) {
        entries.forEach(entry => {

            if (entry.isIntersecting && window.innerWidth > 1000) {
                entry.target.style.animation = `pricingAnim 0.9s ${pricingDelay}s ease forwards`
                pricingDelay += 0.4;
            }
        })
    }
})


pricings.forEach(pr => pricingsObs.observe(pr))



/* --- Contact me Observer --- */

const contactH2 = document.querySelector('.contact h2')
const contactLine = document.querySelector('.contact-h2-line')


const contactObs = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {
        entries[0].target.style.animation = 'fromLeft 1.2s ease forwards'
        contactLine.style.animation = 'h2LineAnim2 1.2s 0.8s ease forwards'
    }
}, { threshold: 1 })

contactObs.observe(contactH2)
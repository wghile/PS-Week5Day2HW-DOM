//Task 1.0
let mainEl = document.querySelector('main')

//Task 1.1
mainEl.style.backgroundColor = '#4a4e4d'

//Task 1.2
const h1 = document.createElement('h1')
document.querySelector('main').appendChild(h1)
h1.textContent = 'SEI Rocks!'

//Task 1.3
mainEl.setAttribute('class', 'flex-ctr')

//Task 2.0
let topMenuEl = document.querySelector('nav')

//Task 2.1
topMenuEl.style.height = '100%'

//Task 2.2
topMenuEl.style.backgroundColor = '#0e9aa7'

//Task 2.3
topMenuEl.setAttribute('class', 'flex-around')

//Task 3.0
//Menu data structure
var menuLinks = [
{text: 'about', href: '/about'},
{text: 'catalog', href: '/catalog'},
{text: 'orders', href: '/orders'},
{text: 'account', href: '/account'},
];

//Task 3.1
menuLinks.forEach((element) => {
    const a = document.createElement('a')
    a.setAttribute('href', element.href)
    a.textContent = element.text
    document.querySelector('nav').appendChild(a)
})
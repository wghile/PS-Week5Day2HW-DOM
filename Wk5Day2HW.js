//Part I
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
// var menuLinks = [
// {text: 'about', href: '/about'},
// {text: 'catalog', href: '/catalog'},
// {text: 'orders', href: '/orders'},
// {text: 'account', href: '/account'},
// ];

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Task 3.1
menuLinks.forEach((element) => {
    const a = document.createElement('a')
    a.setAttribute('href', element.href)
    a.textContent = element.text
    a.setAttribute('subLinks', element.subLinks)
    document.querySelector('nav').appendChild(a)
})


//Part II
//Task 4.0
let subMenuEl = document.querySelector('#sub-menu')

//Task 4.1
subMenuEl.style.height = '100%'

//Task 4.2
subMenuEl.style.backgroundColor = '#3da4ab'

//Task 4.3
subMenuEl.setAttribute('class', 'flex-around')

//Task 4.4
subMenuEl.style.position = 'absolute'

//Task 4.5
subMenuEl.style.top = '0'


//Task 5.1
let topMenuLinks = document.querySelectorAll('a')
// console.log(topMenuLinks[0].hasAttribute('subLinks'))   //not sure why this shows that the about <a> element has a subLinks attribute...
// console.log(topMenuLinks[0].getAttribute('subLinks'))    //output --> undefined
// console.log(topMenuLinks[1].hasAttribute('subLinks'))
// console.log(topMenuLinks[1].getAttribute('subLinks'))
let showingSubMenu = false

//Task 5.2-5.8
topMenuEl.addEventListener('click', function linkIsWorking(evt){
    evt.preventDefault()
    
    for(let i = 0; i < topMenuLinks.length; i++){
        if(evt.target === topMenuLinks[i]){      //Task 5.2
            console.log(topMenuLinks[i].text) 
            if(topMenuLinks[i].hasAttribute('class','active')){   //Task 5.3
                topMenuLinks[i].classList.remove('active')
                showingSubMenu = false
                subMenuEl.style.top = '0'
                return
            }
        }
        topMenuLinks[i].classList.remove('active')      //Task 5.4
        if(evt.target === topMenuLinks[i]){         //Task 5.5    
            topMenuLinks[i].setAttribute('class', 'active')
        }
        if(evt.target.getAttribute('subLinks') !== 'undefined'){    //Task 5.6-5.8
            showingSubMenu = true
            // console.log(evt.target.textContent)
            menuLinks.forEach((item) => {
                if(item.text === evt.target.textContent){
                    buildSubMenu(item.subLinks)
                    function buildSubMenu(arr){
                        subMenuEl.textContent = ''
                        for(let v = 0; v < arr.length; v++){
                            const a = document.createElement('a')
                            a.setAttribute('href', arr[v].href)
                            a.textContent = arr[v].text
                            subMenuEl.appendChild(a)
                        }
                    }
                }
            })
            subMenuEl.style.top = '100%'
            return
        }else{
            showingSubMenu = false
            subMenuEl.style.top = 0
        } 
    }
})
//Task 6.0-6.4
subMenuEl.addEventListener('click', function headerChange(evt) {
    evt.preventDefault()
    for(let i = 0; i < topMenuLinks.length; i++){
        if(evt.target === topMenuLinks[i]){   
            console.log(topMenuLinks[i].text) 
        }
    }
    showingSubMenu = false
    subMenuEl.style.top = '0'
    topMenuLinks.forEach((element) => {
        element.classList.remove('active')
    })
    if(evt.target.showingSubMenu = true){
        h1.textContent = evt.target.text
        // console.log(h1)
    }else if(evt.target.showingSubMenu = false){    //didn't work :(
        h1.textContent = evt.target.text
        console.log(h1)
    }else{
        return
    }
})

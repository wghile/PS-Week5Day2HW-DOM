//Part I
//Task 1.0 Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector('main')

//Task 1.1 Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = '#4a4e4d'

//Task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>
const h1 = document.createElement('h1')
document.querySelector('main').appendChild(h1)
h1.textContent = 'SEI Rocks!'

//Task 1.3 Add a class of flex-ctr to mainEl
mainEl.setAttribute('class', 'flex-ctr')

//Task 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
let topMenuEl = document.querySelector('nav')

//Task 2.1 Set the height topMenuEl element to be 100%
topMenuEl.style.height = '100%'

//Task 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = '#0e9aa7'

//Task 2.3 Add a class of flex-around to topMenuEl
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

//Task 3.1 Iterate over the entire menuLinksarray and for each "link" object:
    // Create an <a> element
    // On the new element, add an href attribute with its value set to the href property of the "link" object
    // Set the new element's content to the value of the textproperty of the "link" object.
    // Append the new element to the topMenuElelement
menuLinks.forEach((element) => {
    const a = document.createElement('a')
    a.setAttribute('href', element.href)
    a.textContent = element.text
    a.setAttribute('subLinks', element.subLinks)
    document.querySelector('nav').appendChild(a)
})


//Part II
//Task 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
let subMenuEl = document.querySelector('#sub-menu')

//Task 4.1 Set the height subMenuEl element to be 100%
subMenuEl.style.height = '100%'

//Task 4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = '#3da4ab'

//Task 4.3 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
subMenuEl.setAttribute('class', 'flex-around')

//Task 4.4 Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = 'absolute'

//Task 4.5 Set the CSS top property of subMenuElto the value of 0
subMenuEl.style.top = '0'


//Task 5.1 
    // Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
    // Declare a global showing SubMenu variable and initialize it to false
let topMenuLinks = document.querySelectorAll('a')
let showingSubMenu = false

//Task 5.2-5.8
topMenuEl.addEventListener('click', function linkIsWorking(evt){        //Task 5.2 Attach a delegated 'click' event listener to topMenuEl
    evt.preventDefault()
    
    for(let i = 0; i < topMenuLinks.length; i++){
        if(evt.target === topMenuLinks[i]){     
            console.log(topMenuLinks[i].text) 
            if(topMenuLinks[i].hasAttribute('class','active')){   //Task 5.3  if the clicked <a>link has a class of active:
                topMenuLinks[i].classList.remove('active')      // Remove the active class from the clicked <a> element
                showingSubMenu = false                          // Set the showingSubMenu to false
                subMenuEl.style.top = '0'                       // Set the CSS top property of subMenuElto 0
                return                                          // return to exit the handler
            }
        }
        topMenuLinks[i].classList.remove('active')      //Task 5.4 the event listener should remove a class name of active from each <a> element in topMenuLinks - whether the active class exists or not
        if(evt.target === topMenuLinks[i]){         //Task 5.5   the event listener should add a class name of activeto the <a> element that was clicked
            topMenuLinks[i].setAttribute('class', 'active')
        }
        if(evt.target.getAttribute('subLinks') !== 'undefined'){    //Task 5.6 Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property otherwise, set it to false
            showingSubMenu = true               
            menuLinks.forEach((item) => {                           //Task 5.7 If showingSubMenu is true:
                if(item.text === evt.target.textContent){
                    buildSubMenu(item.subLinks)                 // Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element
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
            subMenuEl.style.top = '100%'                            // Set the CSS top property of subMenuEl to 100%
            return
        }else{                                              // Otherwise (showingSubMenuis false):
            showingSubMenu = false
            subMenuEl.style.top = 0                             // Set the CSS top property of subMenuElto 0
        } 
    }
})
//Task 6.0-6.4
subMenuEl.addEventListener('click', function headerChange(evt) {        //Task 6.0 Attach a delegated 'click' event listener to subMenuEl
    evt.preventDefault()
    for(let i = 0; i < topMenuLinks.length; i++){
        if(evt.target === topMenuLinks[i]){   
            console.log(topMenuLinks[i].text) 
        }
    }
    showingSubMenu = false                                          //Task 6.1 Set showingSubMenu to false
    subMenuEl.style.top = '0'                                         // Set the CSS top property of subMenuElto 0
    topMenuLinks.forEach((element) => {
        element.classList.remove('active')                          //Task 6.2 Remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not
    })
    if(evt.target.showingSubMenu = true){                       //Task 6.3 Update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl
        h1.textContent = evt.target.text
        // console.log(h1)
    }else if(evt.target.showingSubMenu = false){    //didn't work :(        //Task 6.4 If the ABOUT link is clicked, an <h1>about</h1> should be displayed
        h1.textContent = evt.target.text
        console.log(h1)
    }else{
        return
    }
})


document.addEventListener('DOMContentLoaded', () => {
const btnMenu=document.getElementById('main-menu-icon');
const menu=document.getElementById('main-menu-container');
const menuItem=document.querySelectorAll('.menu-item');

const sections=document.querySelectorAll('.section');
console.log(sections);
const wsButton=document.getElementById('ws-button');
const wsContainer=document.getElementById('ws-container')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('hide');
    menu.classList.toggle('show');
});

for(const item of menuItem){
    item.addEventListener('click',()=>{
        menu.classList.remove('show');
        
        
    })
}


const functionObserver = entries => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const itemActual=Array.from(menuItem).find(item=>item.dataset.url===entry.target.id);
            itemActual.classList.add('active');
            for(const item of menuItem){
                if(item != itemActual){
                    item.classList.remove('active');
                }
            }
        }
    })
}

const observer = new IntersectionObserver(functionObserver,{
    root:null,
    rootMargin:'0px',
    threshold:0.1
});

sections.forEach(section=>observer.observe(section));


wsButton.addEventListener('click',()=>{
    wsContainer.classList.toggle('show');
})

function iniciarMap(){ 
    let coord = {lat:0.925611 ,lng: -79.659523};
    let map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
    });
    let marker = new google.maps.Marker({
    position: coord,
    map: map
    });
}

iniciarMap();

});
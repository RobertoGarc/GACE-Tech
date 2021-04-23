

const btnMenu=document.getElementById('main-menu-icon');
const menu=document.getElementById('main-menu-container');
const menuItem=document.querySelectorAll('.menu-item');

const wsButton=document.getElementById('ws-button');
const wsContainer=document.getElementById('ws-container')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('hide');
    menu.classList.toggle('show');
});

for(const item of menuItem){
    item.addEventListener('click',()=>{
        menu.classList.remove('show');
        for(const item2 of menuItem){
            item2.classList.remove('active');
        }
        item.classList.add('active');
        
    })
}

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
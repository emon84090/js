let toggleMenu = document.querySelector('.toggle-menu');
let mainMenu = document.querySelector('.nav-menu');
let closeMenu = document.querySelector('.close-nav');
let body = document.querySelector('body');
let oVerlay = document.querySelector('.overlay');
toggleMenu.addEventListener('click', shownav);

closeMenu.addEventListener('click', shownav);
oVerlay.addEventListener('click', shownav);

function shownav() {
     mainMenu.classList.toggle('open');
     body.classList.toggle('close');
     oVerlay.classList.toggle('active')

}


// gellary

let mygellary = document.querySelectorAll('.filter-item');
let gellaryFilter = document.querySelector('.gellary-filter');

let gItem = document.querySelectorAll('.gellary-item');

for (let i = 0; i < mygellary.length; i++) {
     mygellary[i].addEventListener('click', function (e) {
          let filterVal = this.innerHTML;

          gellaryFilter.querySelector('.active').classList.remove('active');

          e.target.classList.add('active');

          gItem.forEach(function (items) {
               if (items.classList.contains(filterVal) || filterVal == "all") {
                    items.classList.add('show');
                    items.classList.remove('hide');

               } else {
                    items.classList.add('hide');
                    items.classList.add('remove');

               }

          })



     })

}













// let mygellary = document.querySelectorAll('.gellary-item');
// let gellaryFilter = document.querySelector('.gellary-filter');

// gellaryFilter.addEventListener("click", (allevent) => {
//      if (allevent.target.classList.contains('filter-item')) {
//           gellaryFilter.querySelector('.active').classList.remove('active');

//           allevent.target.classList.add('active');

//           let filterVal = allevent.target.getAttribute('data-filter');

//           mygellary.forEach((gitems) => {


//                if (gitems.classList.contains(filterVal) || filterVal == "open") {
//                     gitems.classList.add('show');
//                     gitems.classList.remove('hide');
//                } else {

//                     gitems.classList.add('hide');
//                     gitems.classList.remove('show');

//                }

//           })

//      }

// })


// gellary




// let nav=document.querySelector('.nav');

// document.querySelector('.togle-menu').addEventListener('click',()=>{
//      nav.classList.toggle('open');

//      if(nav.classList.contains('open')){
//           nav.style.maxHeight=nav.scrollHeight+'px';
//      }else{
//           nav.removeAttribute('style');
//      }
// })

// console.log(nav.scrollHeight);





let index = 0;
setInterval(showSlide, 4000);
function showSlide() {
     let slides = document.querySelectorAll('.slider-item .item');
     index++;
     if (index >= slides.length) {
          index = 0;

     }

     for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove('active');

     }

     slides[index].classList.add('active');





}
showSlide();



// practice
let mName = document.querySelector('#myName');

let mAddress = document.querySelector('#myAddress');

let addBtn = document.querySelector('#addBtn');

let tbtBody = document.querySelector('#myBody')


if (!localStorage.getItem('todo')) {
     let mkarray = new Array();
     localStorage.setItem('todo', JSON.stringify(mkarray));

}
const showTodo = () => {
     let showItem = JSON.parse(localStorage.getItem('todo'));
     itemIndex = 0;

     showItem.forEach((items, indexkey) => {
          itemIndex++;
          tbtBody.innerHTML += `<tr>
                <td>${itemIndex}</td>
                <td>${items.name}</td>
                <td>${items.address}</td>
               <td data-itemId="${indexkey}">delete</td>
                 <td data-itemId="${indexkey}">update</td>
          
                </tr>

          `;


     })
}
showTodo()


const addTodo = () => {
     addBtn.addEventListener('click', () => {
          if (mName.value == "" || mAddress.value == "") {
               alert('emty data not alowed');
          } else {

               let currrentTodo = JSON.parse(localStorage.getItem('todo'));
               let newArray = {
                    name: mName.value,
                    address: mAddress.value
               }

               currrentTodo.push(newArray);
               localStorage.setItem('todo', JSON.stringify(currrentTodo));

               mName.value = "";
               mAddress.value = "";
               tbtBody.innerHTML = "";

               showTodo()

          }
     })

}
addTodo();

















// if(!localStorage.getItem('todo')){
//      let mkArray=new Array();
//      localStorage.setItem('todo',JSON.stringify(mkArray));
// }


// const showtodos=()=>{
//      let itemIndex=0;

//      let currentitems=JSON.parse(localStorage.getItem('todo'));
//      currentitems.forEach((items,key)=>{
//           itemIndex++;



//           tbtBody.innerHTML +=`<tr>
//           <td>${itemIndex}</td>
//           <td>${items.name}</td>
//           <td>${items.address}</td>
//           <td data-itemId="${key}">delete</td>
//           <td data-itemId="${key}">update</td>

//      </tr>`




//      })


// }

// showtodos()



// const addtodo=()=>{
//      addBtn.addEventListener('click',function(e){
//           if (mName.value==="" || mAddress.value==="") {
//                alert('emty not allowed')
//           } else {





//           let currentItems=JSON.parse(localStorage.getItem('todo'));
//           let newtodo={
//                name:mName.value,
//                address:mAddress.value

//           }
//           currentItems.push(newtodo)
//           localStorage.setItem('todo',new Array());
//           localStorage.setItem('todo',JSON.stringify(currentItems));


//           mName.value="";
//           mAddress.value="";
//           tbtBody.innerHTML="";

//           showtodos()

//           }

//      })
// }

// addtodo();

// function bodythemes(){
//      let allTheme=localStorage.getItem('body-theme');

// body.classList.add(`${allTheme}`);

// }
// bodythemes()

let myBody = document.querySelector('body');
document.querySelector('#mtheme').addEventListener('click', (e) => {

     localStorage.setItem('body-theme', 'add-dark')


})

// if(!localStorage.setItem('body-theme')){
//      localStorage.setItem('body-theme','add-light');
// }

var countD = new Date("Jul 23, 2021 13:00:00");

console.log(countD)



// Set the date we're counting down to
var countDownDate = new Date("Jul 2, 2021 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time


  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(seconds<10){
       seconds="0"+seconds;
  }
  if(minutes<10){
     minutes="0"+minutes;
}

  // Display the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

{/* <i class="fas fa-moon"></i> */}
{/* <i class="far fa-lightbulb"></i> */}
var themeSwitch = document.getElementById('html');
let themeIcon=document.querySelector('.themeicon');
let fullBody=document.querySelector('body');
if(themeSwitch) {
  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
    
  });

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
     localStorage.setItem('bodytheme','dark')
     themeIcon.setAttribute('class','fas fa-moon')
     body.classList.remove('light');
    } else {
     localStorage.setItem('bodytheme','light')
     themeIcon.setAttribute('class','far fa-lightbulb');
     body.classList.remove('dark');
    } 

    bodythemes()
  };
}
function bodythemes(){
     let allTheme=localStorage.getItem('bodytheme');
     if (allTheme==='dark') {
          themeSwitch.checked
          themeIcon.setAttribute('class','fas fa-moon')
     }

body.classList.add(`${allTheme}`);

}

bodythemes()


// practice





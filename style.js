
 
  const texts = [
    { text: "Hi! My Name is Subha Baidya", color: "#ff004f" },
    { text: "And I'm a front-end Developer", color: "#ff004f" },
    
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100;
  const delay = 800;
  const el = document.getElementById("output");
  const form = document.getElementById('sheetdb_form')

  function type() {
    const current = texts[index];
    
    if (isDeleting) {
      charIndex--;
      el.textContent = current.text.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = current.text.substring(0, charIndex);
      el.style.color = current.color; // change color during typing
    }

    if (!isDeleting && charIndex === current.text.length) {
      isDeleting = true;
      setTimeout(type, delay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(type, 400);
    } else {
      setTimeout(type, speed);
    }
  }

  type();

  

  // const ACCESS_KEY = "Kx3YZ-zKG35UFiObcBwjMWmpcIyekG9i5zWkjrGh5OQ";
  // const imageCount = 5; // number of images to fetch
  // const carouselInner = document.getElementById('carouselInner');

  // fetch(`https://api.unsplash.com/photos/random?count=${imageCount}&client_id=${ACCESS_KEY}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     data.forEach((image, index) => {
  //       const div = document.createElement('div');
  //       div.classList.add('carousel-item');
  //       if (index === 0) div.classList.add('active');

  //       const img = document.createElement('img');
  //       img.src = image.urls.regular;
  //       img.className = 'd-block w-100';
  //       img.alt = image.alt_description || "Unsplash Image";

  //       div.appendChild(img);
  //       carouselInner.appendChild(div);
  //     });
  //   })
  //   .catch(err => {
  //     console.error("Failed to fetch Unsplash images", err);
  //   });



  const search_box = document.querySelector("#search_box")
  const searchBtn = document.querySelector("#bttn")
  const search = document.querySelector(".search")
  const end = document.querySelector(".rotate-icon")


   function searchSection() {
    const input = document.getElementById('search-box').value.toLowerCase().trim();

    // Match input with section IDs
    const target = document.getElementById(input);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Section not found!');
    }
  }




  searchBtn.addEventListener ("click", () => {

  
        event.preventDefault();

    if (search.classList.contains("m")) {
         searchSection();

      search_box.innerHTML="";
      

    }
    else{
      search.classList.add("m");
      end.classList.remove("d-none")
    }

  } )

  end.addEventListener ("click", ()=>{

    search.classList.remove("m");
    end.classList.add("fa-spin")
      rotate();

  })


  function rotate() {
    
    if(search.classList.contains("search")) {

   setTimeout(() => {
      end.classList.remove("fa-spin");
      end.classList.add("d-none")
    }, 900); 

  
      

    }
  }

   



  
 







  
  let lastScrollTop = 0;
  const navbar = document.getElementById('mainNavbar');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll Down → Hide navbar
      navbar.style.top = "-80px"; // adjust if your navbar is taller
    } else {
      // Scroll Up → Show navbar
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });




  const tabBttn = document.querySelectorAll(".tab-links")
  const showcase = document.querySelector("#slid-img")
  const imageGroups=[
     ["skills1.jpg","skills2.jpg","skills3.jpg","skilss4.jpg"],
    ["exprience1.jpg", "exprience2.jpg","exprience3.jpg","exprience4.jpg"],
    ["education1.jpg","education2.jpg","education3.jpg","education4.jpg"],
  ]
  
    // ["education1.jpg","education2.jpg","education3.jpg"]


  console.log(imageGroups)

  let cureentintterVal=0;

  function playSlideshow(Index) {
      let imgEl = document.getElementById("slid-img");
    const group= imageGroups[Index];
     if (cureentintterVal!==null || imgEl.src!=="" ) {
       clearInterval(cureentintterVal)
       imgEl.src= ""
    }

    cureentintterVal= setInterval(() => {

       const randomIndex = Math.floor(Math.random() * group.length);
      imgEl.src = group[randomIndex];


    },900)
  }


//  window.onload = function() {

//   const images = ["skills1.jpg","skills2.jpg","skills3.jpg","skills4.jpg"]
//   images.forEach(src =>{
//     let img =new Image()
//     img.src=src;
//     showcase.appendChild(img)
//   })

//
  //   function playSlideshow(index) {
  //   const group = imageGroups[index];
    
    
  //   // Clear current images
  //   showcase.innerHTML = "";

  //   // Add new images
  //   group.forEach(src => {
  //     const img = document.createElement("img");
  //     img.src = src;
  //     img.style.width = "auto";
      
  //     showcase.appendChild(img);
  //   });
  // }




  const tablinks= document.getElementsByClassName("tab-links")
  const tabcontent = document.getElementsByClassName("tab-containes")
  function opentab(tabname){
    for (tab of tablinks){
         tab.classList.remove("active-link")
    }
     for (content of tabcontent){
      content.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

  }
  


  
  function start(){
    const icon = document.querySelector('.first')
    if(icon.classList.contains('main')){
      icon.classList.remove('main')
    }
    else{
    icon.classList.add('main')
    }

  };

const about = document.querySelector('.about-me');
const position = document.querySelector('.main-position');
  const Observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

        
       position.classList.remove('main-position1')

        position.classList.add('sec-position')
        // Observer.unobserve(entry.target);
      } 
      // else{
      //   position.classList.remove('sec-position')
      // }
      
    
  });
}, { threshold: 0.3 });

Observer.observe(about)


  let fbInterval, igInterval, snapInterval;

  function startfacebookCount(target) {
    clearInterval(igInterval);
    let current = 0;
    const display = document.getElementById('social-media1');
    fbInterval = setInterval(() => {
      display.textContent = current
      current++;
      if (current > target) {
        clearInterval(fbInterval);
      }
    }, 20); // speed of count
  }

  function startinstaCount(target) {
    clearInterval(igInterval);
    let current = 0;
    const display = document.getElementById('social-media2');
    igInterval = setInterval(() => {
      display.textContent = current
      current++;
      if (current > target) {
        clearInterval(igInterval);
      }
    }, 50);
  }

  function startsnapCount(target) {
    clearInterval(snapInterval);
    let current = 0;
    const display = document.getElementById('social-media3');
    snapInterval = setInterval(() => {
      display.textContent = current
      current++;
      if (current > target) {
        clearInterval(snapInterval);
      }
    }, 20);
  }
  const Observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {


     startfacebookCount(700)
     startinstaCount(50)
     startsnapCount(550)
     Observer2.unobserve(entry.target);
      } 
   
    
  });
}, { threshold: 0.3 });

Observer2.observe(timmer)





 const Observer4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {


      position.classList.remove('sec-position')
       position.classList.add('main-position1')

    

     
      } 
      // else{
      //   position.classList.remove('sec-position')
      // }
      
    
  });
}, { threshold: 0.3 });

Observer4.observe(header)



form.addEventListener('submit', e =>{
  e.preventDefault();
  const name=document.getElementById('Name')
  const Email=document.getElementById('Email')
  const Text=document.getElementById('Text')
  if(name.value==="" || Email.value==="" || Text.value==="") {
    alert("YOU NEED TO FILL THE ALL THE BLANKS")
  }
  else{
  fetch(form.action,{
    method: "POST",
     body: new FormData(document.getElementById('sheetdb_form'))
  }).then(
    response => response.json()
  ).then((html) =>{
    alert('submitted !! thank you &#128512 ' + document.getElementById('Name').value)
    window.location.herf ='';
    location.reload()
  })
}
})

const first_section= document.getElementById('w')
const sec_section= document.getElementById('count')
const third_section= document.getElementById('about5')
const fourth_section= document.getElementById('servicess')
const fifth_section= document.getElementById('mainWork')

function callbackfuntion(enteries) {
  enteries.forEach(entry =>{
    if(entry.isIntersecting){
    // console.log(entry.target.id)
      if(entry.target.id==='w'){
      
      entry.target.classList.add('loaded')
      console.log('bnncj')
      }
      if(entry.target.id==='count'){
      entry.target.classList.add('loaded')
      }
      if(entry.target.id==='about5'){
        console.log("jbhrgbrgb")
      entry.target.classList.add('loaded')
      }
      if(entry.target.id==='servicess'){
      entry.target.classList.add('animate')
      }
      if(entry.target.id==='mainWork'){
      entry.target.classList.add('popup')
      }


    observer.unobserve(entry.target)
    }

  })
  
}

const options={
  threshold:[0.5,0.5,0.5,0.2,0.5]
}
const observer = new IntersectionObserver(
  callbackfuntion,
  options
)

observer.observe(first_section)
observer.observe(sec_section)
observer.observe(third_section)
observer.observe(fourth_section)
observer.observe(fifth_section)







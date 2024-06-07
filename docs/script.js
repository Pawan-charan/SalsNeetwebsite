window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

const moveTop=document.querySelector('.top');

window.addEventListener('scroll',()=>{
  var y=window.scrollY;
  if(y>=800){
    moveTop.classList.add('active');
  }
  else{
    moveTop.classList.remove('active')
  }
});

const btnshow=document.querySelector('.btn-show');
const navbar=document.querySelector('.navbar');

btnshow.addEventListener('.click',()=>{
  navbar.classList.toggle('show');
});






document.querySelector('.btn-show').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('show');
});

AOS.init();

AOS.init();

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
  } else {
      document.getElementById("navbar").style.top = "-50px";
  }
}



document.querySelectorAll('.faq-question').forEach(question => {
const toggle = document.createElement('span');
toggle.classList.add('faq-toggle');
toggle.textContent = '+';
question.appendChild(toggle);

question.addEventListener('click', () => {
const answer = question.nextElementSibling;
answer.classList.toggle('show');
question.classList.toggle('open');
toggle.textContent = toggle.textContent === '+' ? '−' : '+';
});
});


function toggleDropdown() {
  var dropdown = document.getElementById("dropdownMenu");
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
  }
}


function toggleDropdown() {
      document.getElementById("dropdownMenu").classList.toggle("show");
  }

  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
      }
  }

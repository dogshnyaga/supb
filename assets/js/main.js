function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  event.stopPropagation();

  document.querySelectorAll(".dropdown-content").forEach((menu) => {
    if (menu.id !== dropdownId) {
      menu.classList.remove("dropdown-show");
      menu.previousElementSibling.classList.remove("active");
    }
  });

  const dropdown = document.getElementById(dropdownId);
  const button = dropdown.previousElementSibling;

  dropdown.classList.toggle("dropdown-show");
  button.classList.toggle("active");
}


function toggleAccordion(button) {
  const panel = button.parentElement;
  const body = button.nextElementSibling;

  button.classList.toggle("active");
  body.classList.toggle("active");
  
  const allPanels = document.querySelectorAll(".accordion-panel");
  allPanels.forEach((accordionPanel) => {
    if (accordionPanel !== panel) {
      accordionPanel
        .querySelector(".accordion-header")
        .classList.remove("active");
      accordionPanel
        .querySelector(".accordion-body")
        .classList.remove("active");
    }
  });
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown-wrapper")) {
    document.querySelectorAll(".dropdown-content").forEach((menu) => {
      menu.classList.remove("dropdown-show");
      menu.previousElementSibling.classList.remove("active");
    });
  }
});

let tabButtons = document.querySelectorAll(".tab-btn");
let tabContents = document.querySelectorAll(".content-item");

tabButtons.forEach((button, index) => {
  button.onclick = () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    button.classList.add("active");
    document.querySelector(".content-item.active").classList.remove("active");
    tabContents[index].classList.add("active");
  };
});


let signInModal = document.getElementById("sign_in");
let signUpModal = document.getElementById("sign_up");

function showSignInModal() {
  signInModal.style.display = "block";
}

function hideSignInModal() {
  signInModal.style.display = "none";
}

function showSignUpModal() {
  signUpModal.style.display = "block";
}

function hideSignUpModal() {
  signUpModal.style.display = "none";
}

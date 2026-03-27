function scrollToCategory(id){

document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});

document
.querySelectorAll(".category-nav button")
.forEach(btn=>btn.classList.remove("active"));

let clickedButton =
event.currentTarget;

clickedButton.classList.add("active");

}
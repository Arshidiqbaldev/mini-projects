const parent = document.getElementById("name-div");
const socialIcon = document.querySelectorAll(".imgs-div .my-img");



socialIcon.forEach((icon, index) => {

    const handleMouseEnter = function () {
        parent.className = "";
        parent.classList.add(`parent-child-${index + 1}`);
       
    };


    icon.addEventListener("mouseenter", handleMouseEnter);
   

});

try {

    const track = document.querySelector(".track");
    const cards = document.querySelectorAll(".card");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;



    // automatic

    const card = document.querySelector(".card");
    const cardStyle = getComputedStyle(card);
    const width = card.offsetWidth;
    const gap = parseInt(cardStyle.marginRight || 0);
    const slideWidth = width + gap;


    // carousel

    nextBtn.addEventListener("click", () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        }

        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        }

        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    })




} catch (error) {
    console.log(error)
}
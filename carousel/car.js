try {

    const track = document.querySelector(".track");
    const cards = document.querySelectorAll(".card");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;

    cards.forEach((card) => {
        card.classList.add("animated")
    })


    // automatic

    const card = document.querySelector(".card");
    const cardStyle = getComputedStyle(card);
    const width = card.offsetWidth;
    const gap = parseInt(cardStyle.marginRight || 0);
    const slideWidth = width + gap;

    track.addEventListener("mouseover", () => {

        cards.forEach((card) => {
            card.style.animationPlayState = "paused"
        })

    });


    track.addEventListener("mouseleave", () => {
        cards.forEach((card) => {
            card.style.animationPlayState = "running"
        })
    })









    // carousel

    nextBtn.addEventListener("click", () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;

            cards.forEach((card) => {
                card.classList.remove("animated")
            })


        }

        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;

        }


        const animatedCon = cards.forEach((i) => {
            i.classList.contains("animated");
            i.classList.remove("animated");
        })

        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    })



    nextBtn.addEventListener("mouseleave", () => {

        if (currentIndex < cards.length - 1) {

            track.style.transform = `translateX(0)`;

            currentIndex = 0;



            cards.forEach((card) => {
                card.classList.add("animated")
            })

        }





    })


    prevBtn.addEventListener("mouseleave", () => {

        if (currentIndex < cards.length - 1) {
            track.style.transform = `translateX(0)`;
            currentIndex = 0;




            cards.forEach((card) => {
                card.classList.add("animated")
            })


        }



    })



} catch (error) {
    console.log(error)
}



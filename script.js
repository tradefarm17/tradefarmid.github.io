// ===============================
// TRADE FARM.ID JAVASCRIPT
// ===============================


// Menampilkan pesan di console

console.log(
    "Trade Farm.ID website berhasil dimuat."
);


// ===============================
// SCROLL ANIMATION
// ===============================

const animatedElements =
    document.querySelectorAll(
        ".materi-card, .benefit, .about-content"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(

                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }

            );

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(

    (element) => {

        observer.observe(element);

    }

);



// ===============================
// NAVBAR SCROLL
// ===============================

const navbar =
    document.querySelector(".navbar");


window.addEventListener(

    "scroll",

    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,7,11,0.97)";

        } else {

            navbar.style.background =
                "rgba(8,11,18,0.88)";

        }

    }

);

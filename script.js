// ======================================
// PAGE ELEMENTS
// ======================================

const page1 =
document.getElementById("page1");

const loadingScreen =
document.getElementById("loadingScreen");

const dadScreen =
document.getElementById("dadScreen");

const slideshowScreen =
document.getElementById("slideshowScreen");

const birthdayPage =
document.getElementById("birthdayPage");

const yesButton =
document.getElementById("yesButton");


// ======================================
// YES BUTTON
// ======================================

yesButton.addEventListener("click", function(){

    page1.style.display = "none";

    loadingScreen.style.display = "flex";

    startLoading();

});


// ======================================
// LOADING MESSAGES
// ======================================

const loadingMessages = [

    "Initializing...",

    "Connecting to Dad Database...",

    "Searching for William Natera...",

    "Checking dad status...",

    "Scanning for legendary dad jokes...",

    "Checking how many times he has said 'back in my day'...",

    "Calculating dad wisdom...",

    "ERROR: Too much dad energy detected.",

    "Just kidding 😂",

    "Birthday Dad verified. ✓",

    "Loading memories..."

];


// ======================================
// LOADING
// ======================================

function startLoading(){

    let index = 0;

    let percent = 0;

    const timer =
    setInterval(function(){

        document.getElementById("loadingText")
        .textContent =
        loadingMessages[index];


        percent += 100 / loadingMessages.length;

        if(percent > 100){

            percent = 100;

        }


        document.getElementById("progress")
        .style.width =
        percent + "%";


        document.getElementById("progressPercent")
        .textContent =
        Math.floor(percent) + "%";


        index++;


        if(index >= loadingMessages.length){

            clearInterval(timer);


            setTimeout(function(){

                loadingScreen.style.display = "none";

                dadScreen.style.display = "flex";


                setTimeout(function(){

                    dadScreen.style.display = "none";

                    slideshowScreen.style.display = "flex";

                    startSlideshow();

                },3000);


            },1000);

        }

    },1000);

}


// ======================================
// SLIDESHOW
// ======================================

const slides = [

    {
        image: "images/photo1.jpg",
        caption: "A special memory ❤️"
    },

    {
        image: "images/photo2.jpg",
        caption: "Another special memory ❤️"
    },

    {
        image: "images/photo3.jpg",
        caption: "Another memory with Dad ❤️"
    }

];


let currentSlide = 0;


// ======================================
// START SLIDESHOW
// ======================================

function startSlideshow(){

    showSlide();

}


// ======================================
// SHOW SLIDE
// ======================================

function showSlide(){

    const image =
    document.getElementById("slideImage");

    const caption =
    document.getElementById("slideCaption");


    // Fade out

    image.style.opacity = "0";


    setTimeout(function(){

        image.src =
        slides[currentSlide].image;

        caption.textContent =
        slides[currentSlide].caption;


        // Fade in

        image.style.opacity = "1";

    },800);

}


// ======================================
// NEXT
// ======================================

document.getElementById("nextButton")
.addEventListener("click", function(){

    currentSlide++;


    if(currentSlide >= slides.length){

        currentSlide = slides.length - 1;

        document.getElementById("nextButton")
        .style.display = "none";

        document.getElementById("continueButton")
        .style.display = "inline-block";

    }


    showSlide();

});


// ======================================
// PREVIOUS
// ======================================

document.getElementById("previousButton")
.addEventListener("click", function(){

    currentSlide--;


    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }


    showSlide();

});


// ======================================
// CONTINUE TO BIRTHDAY MESSAGE
// ======================================

const continueButton =
document.getElementById("continueButton");


continueButton.addEventListener("click", function(){

    slideshowScreen.style.display = "none";

    birthdayPage.style.display = "flex";

    startBirthdayMessage();

});


// ======================================
// BIRTHDAY MESSAGE
// ======================================

const birthdayText =
`YOUR BIRTHDAY MESSAGE WILL GO HERE.

WE WILL WRITE THIS TOGETHER. ❤️`;


function startBirthdayMessage(){

    const title =
    document.getElementById("birthdayTitle");

    const message =
    document.getElementById("birthdayMessage");


    title.textContent = "";

    message.textContent = "";


    const heading =
    "Happy Birthday Dad! 🎂";

    let i = 0;


    const titleTimer =
    setInterval(function(){

        title.textContent +=
        heading.charAt(i);

        i++;


        if(i >= heading.length){

            clearInterval(titleTimer);

            setTimeout(typeMessage,700);

        }

    },100);

}


function typeMessage(){

    const message =
    document.getElementById("birthdayMessage");

    let i = 0;


    const timer =
    setInterval(function(){

        message.textContent +=
        birthdayText.charAt(i);

        i++;


        if(i >= birthdayText.length){

            clearInterval(timer);

        }

    },25);

               }// ======================================
// PAGE ELEMENTS
// ======================================

const page1 =
document.getElementById("page1");

const loadingScreen =
document.getElementById("loadingScreen");

const dadScreen =
document.getElementById("dadScreen");

const slideshowScreen =
document.getElementById("slideshowScreen");

const birthdayPage =
document.getElementById("birthdayPage");

const yesButton =
document.getElementById("yesButton");


// ======================================
// YES BUTTON
// ======================================

yesButton.addEventListener("click", function(){

    page1.style.display = "none";

    loadingScreen.style.display = "flex";

    startLoading();

});


// ======================================
// LOADING MESSAGES
// ======================================

const loadingMessages = [

    "Initializing...",

    "Connecting to Dad Database...",

    "Searching for William Natera...",

    "Checking dad status...",

    "Scanning for legendary dad jokes...",

    "Checking how many times he has said 'back in my day'...",

    "Calculating dad wisdom...",

    "ERROR: Too much dad energy detected.",

    "Just kidding 😂",

    "Birthday Dad verified. ✓",

    "Loading memories..."

];


// ======================================
// LOADING
// ======================================

function startLoading(){

    let index = 0;

    let percent = 0;

    const timer =
    setInterval(function(){

        document.getElementById("loadingText")
        .textContent =
        loadingMessages[index];


        percent += 100 / loadingMessages.length;

        if(percent > 100){

            percent = 100;

        }


        document.getElementById("progress")
        .style.width =
        percent + "%";


        document.getElementById("progressPercent")
        .textContent =
        Math.floor(percent) + "%";


        index++;


        if(index >= loadingMessages.length){

            clearInterval(timer);


            setTimeout(function(){

                loadingScreen.style.display = "none";

                dadScreen.style.display = "flex";


                setTimeout(function(){

                    dadScreen.style.display = "none";

                    slideshowScreen.style.display = "flex";

                    startSlideshow();

                },3000);


            },1000);

        }

    },1000);

}


// ======================================
// SLIDESHOW
// ======================================

const slides = [

    {
        image: "images/photo1.jpg",
        caption: "A special memory ❤️"
    },

    {
        image: "images/photo2.jpg",
        caption: "Another special memory ❤️"
    },

    {
        image: "images/photo3.jpg",
        caption: "Another memory with Dad ❤️"
    }

];


let currentSlide = 0;


// ======================================
// START SLIDESHOW
// ======================================

function startSlideshow(){

    showSlide();

}


// ======================================
// SHOW SLIDE
// ======================================

function showSlide(){

    const image =
    document.getElementById("slideImage");

    const caption =
    document.getElementById("slideCaption");


    // Fade out

    image.style.opacity = "0";


    setTimeout(function(){

        image.src =
        slides[currentSlide].image;

        caption.textContent =
        slides[currentSlide].caption;


        // Fade in

        image.style.opacity = "1";

    },800);

}


// ======================================
// NEXT
// ======================================

document.getElementById("nextButton")
.addEventListener("click", function(){

    currentSlide++;


    if(currentSlide >= slides.length){

        currentSlide = slides.length - 1;

        document.getElementById("nextButton")
        .style.display = "none";

        document.getElementById("continueButton")
        .style.display = "inline-block";

    }


    showSlide();

});


// ======================================
// PREVIOUS
// ======================================

document.getElementById("previousButton")
.addEventListener("click", function(){

    currentSlide--;


    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }


    showSlide();

});


// ======================================
// CONTINUE TO BIRTHDAY MESSAGE
// ======================================

const continueButton =
document.getElementById("continueButton");


continueButton.addEventListener("click", function(){

    slideshowScreen.style.display = "none";

    birthdayPage.style.display = "flex";

    startBirthdayMessage();

});


// ======================================
// BIRTHDAY MESSAGE
// ======================================

const birthdayText =
`YOUR BIRTHDAY MESSAGE WILL GO HERE.

WE WILL WRITE THIS TOGETHER. ❤️`;


function startBirthdayMessage(){

    const title =
    document.getElementById("birthdayTitle");

    const message =
    document.getElementById("birthdayMessage");


    title.textContent = "";

    message.textContent = "";


    const heading =
    "Happy Birthday Dad! 🎂";

    let i = 0;


    const titleTimer =
    setInterval(function(){

        title.textContent +=
        heading.charAt(i);

        i++;


        if(i >= heading.length){

            clearInterval(titleTimer);

            setTimeout(typeMessage,700);

        }

    },100);

}


function typeMessage(){

    const message =
    document.getElementById("birthdayMessage");

    let i = 0;


    const timer =
    setInterval(function(){

        message.textContent +=
        birthdayText.charAt(i);

        i++;


        if(i >= birthdayText.length){

            clearInterval(timer);

        }

    },25);

}
    

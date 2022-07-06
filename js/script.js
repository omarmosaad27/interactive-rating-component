// global variables 
let submit = document.querySelector(".submit")
let ratingSpans = document.querySelectorAll(".rating span")
let ratingSpansArray = Array.from(ratingSpans)
let container = document.querySelector(".container")
// add active class to span and remove from others
ratingSpansArray.forEach((span) => {
    span.addEventListener("click", function (e) {
        ratingSpansArray.forEach((span) => {
            span.classList.remove("active")
        })
        e.target.classList.add("active")
        
        console.log(e.target.textContent);
    })

})
// when submiting take the value in span with active class and make the thank you card and put in the page instead of rating card
submit.addEventListener("click", function () {
    // loop over all spans to know the active one and take its value
    ratingSpansArray.forEach((span) => {
        if (span.classList.contains("active")) {

            let ratingNumber = span.textContent;
            console.log(ratingNumber);
            
            let markup = `
                <div class="thanks_card">
                    <img src="images/illustration-thank-you.svg" alt="thank you">
                    <span class="rate">you selected   ${ ratingNumber }  out of 5</span>
                    <h2>thank you!</h2>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!
                    </p>
                </div>

            `
            container.innerHTML = markup
        }
    });
});


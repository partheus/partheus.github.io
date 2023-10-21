// Toggle snow
function toggleSnow() {
    const toggleSnow = document.getElementById("snow-toggle");
    const snowflake = document.getElementsByClassName("snowflake");
    let isSnowVisible = true; // Initial state

    toggleSnow.addEventListener("click", function () {
        isSnowVisible = !isSnowVisible; // Toggle the state

        // Toggle the content of the button
        toggleSnow.innerHTML = isSnowVisible ? "&#x2745;" : "&#x263C;";

        // Toggle the "show" class on snowflake elements
        for (let i = 0; i < snowflake.length; i++) {
            snowflake[i].classList.toggle("show", isSnowVisible);
        }
    });
}

// Call the function to initialize the snow toggle
toggleSnow();


// <div className="snow-toggle-container" title="Toggle snow">
//     <span id="snow-toggle">&#x2745;</span> <!-- Unicode icon -->
// </div>

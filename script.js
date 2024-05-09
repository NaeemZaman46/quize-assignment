document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Retrieve user data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Store user data in localStorage
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            // Redirect to quiz page
            window.location.href = "quiz.html";
        });
    }

    const userDataDiv = document.getElementById("userData");

    if (userDataDiv) {
        // Retrieve user data from localStorage
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");

        // Display user data
        userDataDiv.innerHTML = `
            <p>Congratulations! You have successfully registered.</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
        `;
    }
});

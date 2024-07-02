document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const form = document.getElementById('signupForm');

    // Check if username exists in cookie
    const username = getCookie('username');

    // Select the getStartedButton element
    const getStartedButton = document.getElementById('getStartedButton');

    // Update button text based on username presence
    if (username) {
        updateButton(username);
    } else {
        updateButton('Get Started');
    }

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get username and password values
        const usernameValue = document.getElementById('username').querySelector('input').value;

        // Validate username (add your validation logic here)

        // Set username in cookie that expires when the browser session ends
        setCookie('username', usernameValue);

        // Update getStartedButton immediately after signup
        updateButton(usernameValue);

        // Navigate to FinalProject.html
        window.location.href = 'FinalWebsite.html';
    });

    // Function to update button text based on username
    function updateButton(username) {
        getStartedButton.innerHTML = `
            <a rel="noreferrer" href="getstarted.html" class="anchor-tag-reset cd-padding" target="_parent" style="text-decoration: none;">
                <p>${username}</p>
                <style id="style-section-DivNWUB-ButtoniWpX">[data-clientId="ButtoniWpX"]{
                    padding:10px 42px 10px 42px;
                    background-color:#FA6444;
                    border-radius:3px;
                    border-width:0px;
                    border-style:groove;
                    border-color:#333;
                    font-family:Inter;
                    font-size:16px;
                    font-weight:600;
                    color:#ffffffff;
                    line-height:26px;
                }</style>
            </a>`;
    }

    // Function to retrieve a cookie value
    function getCookie(name) {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
    }

    // Function to set a cookie that expires when the browser session ends
    function setCookie(name, value) {
        document.cookie = `${name}=${value}; path=/`;
    }
});

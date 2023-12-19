async function authenticate() {
    try {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Read the content of the text file
        const response = await fetch('../Data Tier/data.txt');
        const data = await response.text();

        const users = data.split('\n');
        let isValid = false;

        // Check if the entered username and password match any line in the text file
        users.forEach(user => {
            const [storedUsername, storedPassword] = user.split(':');
            if (username === storedUsername && password === storedPassword) {
                isValid = true;
            }
        });

        // Display a message based on the validation result
        if (isValid) {
            alert("Login successful! Welcome, " + username + "!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    } catch (error) {
        console.error('Error reading the file:', error);
    }
}
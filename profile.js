document.addEventListener("DOMContentLoaded", function() {
    // Check if user is logged in (has access token)
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);
    if (!userData || !userData.accessToken) {
      // Redirect to signup page if not logged in
      window.location.href = "index.html";
    } else {
      // Display user data on the profile page
      document.getElementById("username").textContent = userData.username;
      document.getElementById("email").textContent = userData.email;
      document.getElementById("token").textContent = userData.accessToken
      document.getElementById("password").textContent = userData.password;
    }
  
    // Logout button functionality
    document.getElementById("logoutBtn").addEventListener("click", function() {
      // Clear user data from local storage
      localStorage.removeItem("user");
      // Redirect to signup page after logout
      window.location.href = "index.html";
    });
  });
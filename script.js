document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
  
    // Generate random access token (16-byte string)
    const accessToken = generateRandomToken(16);
  
    // Store user data in local storage
    const userData = { username, password, email, accessToken };
    localStorage.setItem("user", JSON.stringify(userData));
  

    window.location.href = "profile.html";
    if(username.value==""||password.value==""){
        document.getElementsById("hi").innerText="FFFFFFFFFFFF"
    }
       
  });
  
  function generateRandomToken(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }





// .............................................................................................

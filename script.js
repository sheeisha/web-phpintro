$(document).ready(function(){
    $("#loginForm").submit(function(event){
        var username = $("#username").val();
        var password = $("#password").val();
        var valid = true;
        
        //clear previous error message since class, can be applied to multiple spans
        $(".error").text("");

        //validate username
        if (username === ""){
            $("#usernameError").text("Username is required");
            valid = false;
        }

        //validate password
        if (password === ""){
            $("#passwordError").text("Password is required");
            valid = false;
        }

        if ($('#chk').prop('checked')==false)
        {
            valid=false;
            alert("please agree to the terms and conditions");
        }
        //prevent form submission if validation fails
        if(valid==false){
            event.preventDefault();
        }
    });
});
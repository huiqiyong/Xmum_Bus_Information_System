
    

var loginBtn = document.getElementById("sub-btn1");

function loginClick() {
    firebaseRef.on('value', function(datasnapshot){
        var userName = datasnapshot.child("username").val();
        var storedpass = datasnapshot.child("password").val();
        if(userName==username1.value){
            var hpass = hashPass(pass1.value);
            if(hpass==storedpass){
                console.log("log in");
            }
            else{
                console.log("Invalid password");
            }
        }
        else{
            console.log("Invalid username");
        }
    });
}
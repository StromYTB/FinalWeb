const array = [
    "Johny.Silverhand",
    "V.Vincent",
    "Rogue.Amendiares",
    "Jackie.Welles",
    ""
]

function loginFunction() {
      
    const loginUsername = document.getElementById("username").value
    const loginPassword = document.getElementById("password").value

    const loginData = loginUsername + "." + loginPassword

    for(let i = 0; i < array.length; i++){

        if( loginData == array[i]){
            document.getElementById("output").innerHTML = "přihlásil jste se!"
            console.log("přihlásil jste se")
            window.location.href = 'http://127.0.0.1:5500/Programování/38%20-%20Finále/index.html';
            break
        }else if(i == array.length - 1){
            document.getElementById("output").innerHTML = "špatné heslo nebo jméno"
            console.log("nn")
        }
    }

}
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate() {
    let password1 ='';
    let password2 =''
    for(let i=0;i<15;i++)
    {
        let randomindexone = Math.floor(Math.random() * characters.length);
        let randomindextwo = Math.floor(Math.random() * characters.length);
        password1 += characters[randomindexone];
        password2 += characters[randomindextwo];
    }
    document.getElementById('password-1').innerText = password1;
    document.getElementById('password-2').innerText = password2;
}
document.getElementById("image1").addEventListener("click", function() {
    // Get the text from the hidden paragraph
    let textToCopy = document.getElementById("password-1").innerText;

    // Create a temporary text area element to hold the text
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text and copy it to the clipboard
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary text area
    document.body.removeChild(tempTextArea);

    // Optionally, alert the user that the text has been copied
    alert("Text copied to clipboard!");
});
document.getElementById("image2").addEventListener("click", function() {
    // Get the text from the hidden paragraph
    let textToCopy = document.getElementById("password-2").innerText;

    // Create a temporary text area element to hold the text
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text and copy it to the clipboard
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary text area
    document.body.removeChild(tempTextArea);

    // Optionally, alert the user that the text has been copied
    alert("Text copied to clipboard!");
});

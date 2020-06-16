
var generateButton = document.getElementById('generate');
var copyPass = document.getElementById('copy');

var makeSpecial = document.getElementById("specialChar");
var makeNum = document.getElementById( "numerical");
var makeLow = document.getElementById("Lowercase");
var makeCaps = document.getElementById("Uppercase");
    


// slider
var slider = document.getElementById("myRange");
var output = document.getElementById("pwLength");
output.innerHTML = slider.value + ' characters'; 

slider.oninput = function() {
output.innerHTML = this.value + ' characters';
}
// 
    
    
// Function to create and trim password to user selected length   
function aPassword() {
    var allChar = '';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '123456789012345678901234567890';
    var specials =  "!\"#$%&\'()*+,-.\/:;<=>?@[\\]^_`{|}~";
        
        
    if(makeCaps.checked){
    allChar+=(upper);
    }else{}
        
    if(makeNum.checked){
    allChar+=(numbers);
    }else{}
        
        
    if(makeLow.checked){
    allChar+=(lower);
    } else{}
        
    if(makeSpecial.checked){
    allChar+=(specials);
    } else{}

        
    var passwordOutput = '';
    for ( var i = 0; i < allChar.length; i++ ) {
    passwordOutput += allChar.charAt(Math.ceil(Math.random() * allChar.length));
    var trimmedPass = passwordOutput.substr(0, (slider.value))
    }           
    document.getElementById('password').innerHTML = trimmedPass;
    }          
    
            //    
              
   


// copy the password 
function copyThePass() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Password Copied");
    }

copyPass.addEventListener('click', function() {
    return copyThePass()
    })
// 





            //    generate Button
generateButton.addEventListener('click', function() {
    
    if (makeCaps.checked || makeLow.checked || makeNum.checked ||makeSpecial.checked) {
        checked = true;
    } else {
        alert("Select at least one character type.");
        checked = false;
    }

    if (checked === true){
        return aPassword();
    }
})
// 




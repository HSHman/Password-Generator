
var generateButton = document.getElementById('generate');
var copyPass = document.getElementById('copy');
var lengthInput = document.getElementById('pwLength');

    var makeSpecial = document.getElementById("specialChar");
    var makeNum = document.getElementById( "numerical");
    var makeLow = document.getElementById("Lowercase");
    var makeCaps = document.getElementById("Uppercase");
    


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
        
        // alert(allChar);

        
                var passwordOutput = '';
                for ( var i = 0; i < allChar.length; i++ ) {
                passwordOutput += allChar.charAt(Math.ceil(Math.random() * allChar.length));
                var trimmedPass = passwordOutput.substr(0, (lengthInput))

            }
                // alert(passwordOutput)
                // passwordOutput = string.substring(0, 12);
                
                document.getElementById('password').innerHTML = trimmedPass;
                
    
            }    

        
   




   
   
//    generate Button
     generateButton.addEventListener('click', function() {
    
    if (makeCaps.checked || makeLow.checked || makeNum.checked ||makeSpecial.checked) {
        // alert("checked");
        checked = true;
    } else {
        alert("Select at least one character type.");
        checked = false;
    }

    var passLength  = lengthInput.value;
    if (lengthInput !== undefined  && passLength >= 8 && passLength <=28 ) {
        // alert(passLength);
        lengthEntered = true;
    } else {
        alert("Please enter appropriate password length") 
        lengthEntered = false;
    }
    
    if (checked === true && lengthEntered === true){
        return aPassword();
    }
      

})





    


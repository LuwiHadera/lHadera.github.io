window.onload= function(){
    let btn = document.querySelector("button")
    console.log(btn)
    btn.addEventListener('click',passwordchk)

    function passwordchk(){
        let value1 = document.getElementById('password1').value
        let value2 = document.getElementById('password2').value
        let paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        
        if (value1 !== value2) {
            alert('Password does not match')
        }else if(value1.length < 8 || value2.length > 14){
            alert('Password should be between 8 and 14')
        }else if(!value1.match(paswd)){ 
            alert('Please include special character')
        }
        
       
    } 
    
 }
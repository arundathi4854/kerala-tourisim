function showError(Id,Msg){
    document.getElementById(Id).innerHTML=Msg;
}

function validateForm(){
    var fullname = document.Form.fullname.value;
    var email = document.Form.email.value;
    var password = document.Form.password.value;
    var address = document.Form.address.value;
    var mobile = document.Form.mobile.value;
    var city = document.Form.city.value;
    var state = document.Form.state.value;
    var pincode = document.Form.pincode.value;

    var fullnameErr = emailErr = mobileErr = stateErr = cityErr = address = true; 


    if(fullname==""){
        showError("fullnameErr", "Please enter your name");
        var elem = document.getElementById("fullname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");

    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fullname)=== false){
            showError("fullnameErr","Please enter a vaild name");
            var elem = document.getElementById("fullname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            showError("fullnameErr","");
            fullnameErr = false;
            var elem = document.getElementById("fullname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");

        }
    }
};    
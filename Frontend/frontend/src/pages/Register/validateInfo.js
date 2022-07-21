export default function validateInfo(values){
    let errors = {}
    
    if(!values.username.trim()){
        errors.username = "Username is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }
    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length<8){
        errors.password = "Password needs to be 8 characters or more"
    }
    return errors;
}

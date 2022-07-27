import {useState} from 'react';
import axios from 'axios';
const useForm = (callback,validateInfo) => {
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        
    });
    const [errors,setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);
    const handleChange = e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validateInfo(values));
        
        const data = JSON.stringify(values);

        setIsSubmitting(true);
        axios.post(`http://localhost:5000/register`,data,{
            headers: {'Content-Type': 'application/json'},
        })
        .then((data) => {
            setIsSubmitting(false);
            console.log('Registered successfully');
            callback(); 
        }).catch(error=>console.log(error));
    };
    
    return {handleChange,values, isSubmitting, handleSubmit,errors };
};
export default useForm;

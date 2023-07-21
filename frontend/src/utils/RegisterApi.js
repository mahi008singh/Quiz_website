
import axios from 'axios';
const baseUrl="http://localhost:5500";

const registerData=(register,setRegister)=>{
    axios.post(`${baseUrl}/regData`,{register})
    .then((data)=>{
        console.log(data);
        setRegister({})
        // getAllTodo(setRowData)
    }).catch((err)=>{
        console.log(err);
    })
}

export {registerData} 


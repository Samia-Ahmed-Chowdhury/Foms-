import React, { useContext } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { data } from '../Signup'

function Form2() {

    const Data = useContext(data);
    const{post_data,setPost_data}=Data;
    const{phone_number,email}=post_data;
    const fun=()=>{
        Data.setActive("form3");
    }

    return (
        <>
            <div className="form-group">
                <input type="text" className='code_input' placeholder='+880'
                    name='' 
                  
                    required />
                <input type="text" className='num_input' placeholder='1xxxxxxxxxx'
                    name=''
                    value={post_data.phone_number} onChange={e => setPost_data({ ...post_data, phone_number: e.target.value })}
                    required />
            </div>
            <div className="form-group">
                <input type="text" placeholder='Write Email Address'
                   value={post_data.email} onChange={e => setPost_data({ ...post_data, email: e.target.value })}
                required />
            </div>
            <div className='btn_cls '>
                <p className='back_btn' onClick={() => Data.setActive("form1")}>Back</p>
                <button type="submit" className="submit_btn mt-4" onClick={fun}>Next Step <ArrowForwardIcon /></button>
            </div>
        </>
    )
}

export default Form2
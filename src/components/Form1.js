import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { data } from '../Signup'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Form1() {
    let navigate = useNavigate();
    const Data = useContext(data);
    const { post_data, setPost_data,setActive } = Data;
    const { first_name, last_name } = post_data;
    const fun = () => {
        Data.setActive("form2");
//    console.log(first_name);
    }
    return (
        <>
            <div className="form-group">
                <input type="text" placeholder='Write First Name'
                    required
                    value={post_data.first_name} onChange={e => setPost_data({ ...post_data, first_name: e.target.value })} />
            </div>
            <div className="form-group">
                <input type="text" placeholder='Write Last Name'
                    value={post_data.last_name} onChange={e => setPost_data({ ...post_data, last_name: e.target.value })}
                    required />
            </div>
            <div className='btn_cls'>
                <button type="submit" className="submit_btn mt-4" onClick={fun}>Next Step <ArrowForwardIcon /></button>
            </div>
            <div className='account'>
                <p>Already have an account? <span onClick={()=> navigate('/login')}> LOGIN HERE!</span></p>
            </div>
        </>
    )
}

export default Form1
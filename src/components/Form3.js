import React, { useContext } from 'react'
import { data } from '../Signup'

function Form3() {
    const Data = useContext(data);
    const{post_data,setPost_data,len,setLan}=Data;
    // const fun=()=>{
    //     // Data.PostData();
    //     console.log(post_data.password.length);
        

    // }
  return (
    <>
    <div className="form-group mb-0 ">
        <input type="text" placeholder='Write Password'
          value={post_data.password} onChange={e => setPost_data({ ...post_data, password: e.target.value })}
                required />
    </div>
    {len=="false"?
          <p className='pass_valid_text '>Your password must be 8 character</p>
          :<p className='pass_valid_text text-danger '>Your password must be 8 character</p>
    }
    <div className='btn_cls '>
    <p className='back_btn' onClick={()=>Data.setActive("form2")}>Back</p>
        <button type="submit" className="submit_btn mt-4">Sign Up</button>
    </div>
</>
  )
}

export default Form3
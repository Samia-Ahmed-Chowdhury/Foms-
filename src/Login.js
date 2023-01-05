import React, { useState, useEffect } from 'react'
import { json, useNavigate } from "react-router-dom";
import "../src/components/style.css"
import RightSide from './components/RightSide'


function Login() {
    let navigate = useNavigate();
    const [data, setData] = useState([])
    const [post_data, setPost_data] = useState({ email: '', password: '' })
    const [len, setLen] = useState("false");

    const getData = () => {
        fetch('https://test.nexisltd.com/users/signup')
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setData(result);
            })
    }
    useEffect(() => {
        getData()
    }, [])
    let c = 0;
    const PostData = (e) => {
        e.preventDefault()
        getData();
        if (post_data.password.length > 8) {
            // console.log(post_data.email, post_data.password);
            data.map(val =>
                val.email === post_data.email && val.password === post_data.password ? c = 1 : c = 0)

            c === 1 ? navigate('/tab') : alert("password && email does not matched!!!")
        }
        else {
            setLen("true");
            e.preventDefault()
        }
    }


    return (
        <>
            <section className='sign mt-5 pt-4'>
                <div className='container'>
                    <div className='row'>
                        <RightSide />
                        <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 m-auto form_part">
                            <form onSubmit={PostData} >
                                <h4 className="heading_text text-center mb-3" >Log in Form</h4>
                                <div className="form-group">
                                    <input type="text" placeholder='Write Email Address'
                                        value={post_data.email} onChange={e => setPost_data({ ...post_data, email: e.target.value })}

                                        required />
                                </div>
                                <div className="form-group mb-0 ">
                                    <input type="text" placeholder='Write Password'
                                        value={post_data.password} onChange={e => setPost_data({ ...post_data, password: e.target.value })}

                                        required />
                                </div>
                                {len === "false" ?
                                    <p className='pass_valid_text '>Your password must be 8 character</p>
                                    : <p className='pass_valid_text text-danger '>Your password must be 8 character</p>
                                }  <div className='btn_cls'>
                                    <button type="submit" className="submit_btn mt-4" >Log In</button>
                                </div>
                                <div className='account'>
                                    <p>Already have an account? <span onClick={() => navigate('/')}> SIGNUP HERE!</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
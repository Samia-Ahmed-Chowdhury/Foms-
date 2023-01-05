import React, { useState, createContext } from 'react'
import "../src/components/style.css"
import RightSide from './components/RightSide'
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import { useNavigate } from "react-router-dom";

export const data = createContext()
function Signup() {
  let navigate = useNavigate();

  const [active, setActive] = useState("form1");
const[len,setLen]=useState("false");
  const [post_data, setPost_data] = useState({ first_name: '', last_name: '', phone_number: '', email: '', password: '' })

  const PostData = (e) => {
    if (post_data.password.length > 8) {
      fetch('https://test.nexisltd.com/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          first_name: post_data.first_name,
          last_name: post_data.last_name,
          phone_number: post_data.phone_number,
          email: post_data.email,
          password: post_data.password
          // json-server --watch db.json --port 3004
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        navigate('/login');
    }else{
      setLen("true");
      e.preventDefault()
    }

  }

  return (
    <>
      <data.Provider value={{ active, setActive, PostData, post_data, setPost_data,len,setLen }}>
        <section className='sign mt-5 pt-4'>
          <div className='container'>
            <div className='row '>
              <RightSide />
              <div className=" col-xl-5 col-lg-5 col-md-6 col-sm-10 col-10 m-auto form_part">
                <form onSubmit={PostData}>
                  <h4 className="heading_text text-center mb-3" >SignUp Form</h4>

                  {
                    active === "form1" &&
                    <Form1 />
                  }
                  {
                    active === "form2" &&
                    <Form2 />
                  }
                  {
                    active === "form3" &&
                    <Form3 />
                  }
                </form>
              </div>
            </div>
          </div>
        </section>
      </data.Provider>
    </>
  )
}

export default Signup
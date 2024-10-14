import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
    const nav = useNavigate();
    return (
        <div className='contact_page_container'>
            <div className='contact_us_style'>
                <p>this is <b>Contact US</b> page</p>
                <button onClick={()=>{nav('/')}} className='contact_go_to_home_btn'>Go to Home Page &rarr;</button>
            </div>
        </div>
    )
    }

export default ContactUs

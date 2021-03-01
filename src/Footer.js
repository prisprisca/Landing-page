import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='contact'>
                <h2>Contact Us<span>.</span></h2>
                <p> Do you have any inquiries or other questions?
          <br /> Please reach out to contact us. Thank you!!</p>
            </div>

            <div className='input_form'>
                <form>
                <textarea cols='77' rows='2'placeholder='title'></textarea>
                <textarea cols='77' rows='5'placeholder='message'></textarea>
                <button id='button'>Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default Footer

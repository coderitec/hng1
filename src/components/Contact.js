import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function 
() {
  return (
    <form>
        <ul>
            <li>
                <h1>Contact Me</h1>
                <p>Hi there, reach out to me to find out of anything about our services</p>
            </li>
            <li>
                <label for="fname">first name</label>
                <input type="text" name="fname" id="first_name" placeholder="Enter your first name"/>
            </li>
            <li>
                <label for="lname">last name</label>
                <input type="text" name="lname" id="last_name" placeholder="Enter your last name"/>
            </li>
            <li>
                <label for="email">email</label>
                <input type="email" name="email" id="email" placeholder="francenemuo@gmail.com"/>
            </li>
            <li>
                <label for="msg">message</label>
                <textarea name="message" id="msg" cols="30" rows="7" placeholder="Enter some messages here"></textarea>
            </li>
            <li>
                <input type="checkbox" name="agree" id="agree"/>
                <label for="agree">You agree to providing your data when contacted</label>
            </li>
            <li>
                <button type="submit" id="btn__submit">Send message</button>
            </li>
        </ul>
    </form>
  )
}


import React from 'react'

export default function page() {


  return (
    <>
      <div>
        <strong>Contact Page:</strong>
        Phone:
        910.233.2369
        Email:
        cjburn6@gmail.com
        Location:
        Raleigh, NC
      </div>

      <form action="action_page.php">

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your first name.." />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />

        <label for="phone">Phone</label>
        <input type="text" id="phone" name="phone" placeholder="Your phone number.." />

        <label for="subject">Comments</label>
        <textarea id="comment" name="comment" placeholder="Write something.." style={{height : '200px'}} > </textarea>

        <input type="submit" value="Submit" />

      </form>
    </>)

}


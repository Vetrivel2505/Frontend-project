import React, { useState } from 'react';
import "./Login.css";
import Main from './Main';
export default function LoginPage() {

   const[state,setState]=useState(false);
   function handleClick()
   {
    setState(true);
   }

  return (
    <div>{state ? <Main /> : <div class="bg-img" >
    <form action="/action_page.php" class="container">
      <h1>Login</h1>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required></input>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
  
      <button type="submit" class="btn" onClick={handleClick}>Login</button>
    </form>
  </div>}</div>
   

  )
}
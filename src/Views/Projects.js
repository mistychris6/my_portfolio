import React from 'react'
import aboutMe from '../Images/aboutMe.PNG'
import myColorfulLogin from '../Images/myColorfulLogin.PNG'
import objectLiterals from '../Images/objectLiterals.PNG'

export default () => {
  return (
    <div>
      <h1>Loading Projects...</h1>
      <div>
        <a href="https://codepen.io/mchristi/pen/XeNXwY">View via CodePen</a>
        <img src={aboutMe} className="About-Me" alt="About Me" />
      </div>
      <div>
        <a href="https://codepen.io/mchristi/pen/XeNXwY">View via CodePen</a>
        <img src={myColorfulLogin} className="My-Colorful-Login" alt="My Colorful Login" />
      </div>
      <div className="github">
        <a href="https://github.com/mistychris6/Assignments">View via GitHub</a>
        <img src={objectLiterals} className="Object-Literals" alt="Object Literals" />
      </div>
    </div>
  )
}
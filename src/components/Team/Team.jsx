import React from 'react'
import "./Team.css"
import Team1 from "../../assets/team-1.png"

const Team = () => {
  return (
    <section>
      <div className="team">
        <div className="team-image">
            <img src={Team1} alt="" />
        </div>
        <div className="team-content">
            <span>From bubbles to butterfly, we have a program for you</span>
            <div>
                <span>A Proven Curriculum</span>
                <span>A progressive curriculum focused on water safety, skill development, and proper swimming technique for the four fundamental swim strokes.</span>
            </div>
            <a href="" className="btn team-btn">Meet the team</a>
        </div>
    </div>
    </section>
  )
}

export default Team
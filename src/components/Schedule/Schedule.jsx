import React from 'react'
import "./Schedule.css"
import scheduleData from "./schedule-data"

const Schedule = () => {
  return (
    <section id='schedule'>
    <div className="wave-top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L24,149.3C48,139,96,117,144,122.7C192,128,240,160,288,181.3C336,203,384,213,432,197.3C480,181,528,139,576,112C624,85,672,75,720,64C768,53,816,43,864,85.3C912,128,960,224,1008,229.3C1056,235,1104,149,1152,133.3C1200,117,1248,171,1296,186.7C1344,203,1392,181,1416,170.7L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
        </div>
        <div className="schedule">
            <div className="top">
                <span>Start your swimming adventure today</span>
                <a href="" className='btn schedule-btn'>Book Now</a>
            </div>
            <div className="bottom">
              <div className="schedule-cards">
                {scheduleData.map((schedule,i)=>(
                  <div className="schedule-card" key={i}>
                    <div>
                      <span>Group </span>
                      <span>{schedule.class}</span>
                    </div>
                    <div className="times" >
                      {schedule.days.map((day,x)=>(
                        <div key={x}>
                        <span>{day.day}</span>
                        <span>{day.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="wave-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L24,149.3C48,139,96,117,144,122.7C192,128,240,160,288,181.3C336,203,384,213,432,197.3C480,181,528,139,576,112C624,85,672,75,720,64C768,53,816,43,864,85.3C912,128,960,224,1008,229.3C1056,235,1104,149,1152,133.3C1200,117,1248,171,1296,186.7C1344,203,1392,181,1416,170.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        </div>
    </section>
  )
}

export default Schedule
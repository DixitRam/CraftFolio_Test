import "./ExpEdu.css"

const Experience = (userExperience) => {
  console.log(userExperience)
  return (
    <div className="experience" id="experience">
      {userExperience.userExp.map((expItem, index) => {
        return (
          <div key={index} className="experience-item">
            <div className="vertical-line">
              <div className="circle" />
            </div>
            <div className="experience-content">
              <span>{expItem.date}</span>
              <div className="title">
                <h3>{expItem.role}</h3>
              </div>
              <div className="company">
                <p>{expItem.company}</p>
              </div>
              <div className="role">
                <p>{expItem.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Experience


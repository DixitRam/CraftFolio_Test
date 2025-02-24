import { users } from "@/public/FakeData.json"
import "./ExpEdu.css"

const userData = users[0]

const Education = (userEducation) => {
  return (
    <div className="education" id="education">
      {userEducation.userEdu.map((eduItem, index) => {
        return (
          <div key={index} className="education-item">
            <div className="vertical-line">
              <div className="circle" />
            </div>
            <div className="education-content">
              <span>{eduItem.date}</span>
              <div className="title">
                <h3>{eduItem.institution}</h3>
              </div>
              <div className="degree">
                <p>{eduItem.degree}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Education


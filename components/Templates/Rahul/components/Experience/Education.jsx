import "./ExpEdu.css"

const Education = () => {
  return (
    <div className="education" id="education">
      {userData.experienceData?.edu?.map((eduItem, index) => {
        return (
          <div key={index} className="education-item">
            <img className="college-logo" src={eduItem.image} alt="TCS" />
            <div className="vertical-line" />
            <div className="education-content">
              <span>{eduItem.year}</span>
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


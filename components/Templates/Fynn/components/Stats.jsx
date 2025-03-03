"use client";
import CountUp from "react-countup";


const Stats = ({ projects, skills, experience }) => {
  // Calculate years of experience from date ranges
  const calculateYearsOfExperience = () => {
    if (!experience || experience.length === 0) return 0;
    
    const months = {
      'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
      'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
    };

    const parseDate = (dateStr) => {
      const [month, year] = dateStr.toLowerCase().trim().split(' ');
      return {
        month: months[month] || 0,
        year: parseInt(year)
      };
    };

    const currentDate = new Date();
    let totalMonths = 0;

    experience.forEach(job => {
      const [startDateStr, endDateStr] = job.date.split('-').map(d => d.trim());
      const startDate = parseDate(startDateStr);
      
      let endDate;
      if (endDateStr.toLowerCase() === 'present') {
        endDate = {
          month: currentDate.getMonth(),
          year: currentDate.getFullYear()
        };
      } else {
        endDate = parseDate(endDateStr);
      }

      const months = (endDate.year - startDate.year) * 12 + (endDate.month - startDate.month);
      totalMonths += months;
    });

    return Math.max(Math.round(totalMonths / 12), 0);
  };

  // Calculate total technologies used in projects (unique)
  const calculateUniqueTechnologies = () => {
    if (!projects) return 0;
    const uniqueTechs = new Set();
    projects.forEach(project => {
      project.technologies?.forEach(tech => uniqueTechs.add(tech));
    });
    return uniqueTechs.size;
  };

  // Calculate stats
  const statsData = [
    {
      num: calculateYearsOfExperience()||2,
      text: "Years of experience",
    },
    {
      num: projects?.length || 0,
      text: "Projects completed",
    },
    {
      num: skills?.length || 0,
      text: "Technologies mastered",
    },
    {
      num: calculateUniqueTechnologies(),
      text: "Technologies used",
    },
  ];

  return (
    
    <section className="pt-0 pb-12 xl:pt-0 xl:pb-5">

      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statsData.map((item, index) => {
            return (
              <div
                className="flex-1 flex justify-center items-center gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  start={0}
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-[45px] font-extrabold"
                  separator=","
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

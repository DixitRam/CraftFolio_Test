import Image from "next/image";
import PortfolioProjectOne from "../assets/portfolio/Norwegan-project.jpg";
import PortfolioCabens from "../assets/portfolio/WoodenCabens.jpg";
import PortfolioQuizMasters from "../assets/portfolio/QuizLayout.jpg";
import PortfolioWeatherAPP from "../assets/portfolio/WeatherAPP.jpg";
import { Project } from "./elements/project";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center px-5 py-20"
    >
      <h2 className="mb-14 text-center text-4xl font-black">
        Websites I&rsquo;ve created
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <Project
          image={PortfolioQuizMasters}
          title="Quizmasters"
          description="Built using vanilla JavaScript, Quizmasters is a website where you can take quizzes fetched from an API."
          link="https://quiz-quiz-quiz-quiz.netlify.app/"
        />

        <Project
          image={PortfolioWeatherAPP}
          title="Weather App"
          description="This is a simple Weather App built as part of the Odin Project exercise. It fetch the weather data from an API."
          link="https://marc-ruizenaar.github.io/weatherAPI/"
        />

        <Project
          image={PortfolioProjectOne}
          title="Nordic restaurant"
          description="Built using vanilla JavaScript and Webpack, this project offers seamless page transitions without reloading."
          link="https://restaurant-webpack-nu.vercel.app/"
        />

        <Project
          image={PortfolioCabens}
          title="Wooden houses"
          description="Built using Next and Tailwind, focussing on animations."
          link="https://wood-houses-website-gasf.vercel.app/"
        />
      </div>

      <a
        target="_blank"
        href="https://github.com/Marc-Ruizenaar"
        className="mt-10 inline-block rounded-xl border-[1px] border-black px-4 py-2 text-center"
      >
        Check out my code
      </a>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
    </section>
  );
}

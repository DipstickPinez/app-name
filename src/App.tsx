import React from 'react';
import logo from './logo.svg';
import ProjectObject from './components/Project';
import HeaderObject from './components/Header';
import ExperienceObject from './components/Experience';
import CategoryObject from './components/Category';
import InlineListObject from "./components/InlineList";
import LanguageObject from "./components/Language";
import EducationObject from './components/Education';

function App() {
  return (
    <body>
      <main>
        <HeaderObject
          userName="Neia Hu"
          githubUsername="neeia"
          locationName="San Gabriel, California"
          emailName="neiah2718@gmail.com"
          phoneNumber="+1(626)213-9966"
        />
        <div className="main">
          <div className="left">
            <section>
              <h2>Experience</h2>
              <ExperienceObject
                title="TDK Headway Technologies"
                subtitle=".net Developer"
                bulletedList={[
                  "Develop",
                  "Meet with clients",
                  "Deploy feaodafew"]}
                itemDate="Apr 2022 - Current | Milpitas, Ca"
              />
            </section>
            <section>
              <h2>Projects</h2>
              <ProjectObject
                title="Arknights Roster"
                link="https://www.krooster.com/"
                bulletedList={[
                  "Built a web app",
                  "Used Google Firebase",
                  "Developed accessible features",
                  "Designed following principles",
                  "Actively serving over 2,000 registered users with 500 unique daily visitors"]}
                itemDate="June 2021 - Present"
              />
            </section>
          </div>
          <div className="right">
            <CategoryObject
              categoryName="Skills"
              subcategories={[
                <LanguageObject
                  title="Languages"
                  experiencedList={[
                    "Javascript",
                    "Typescript"]}
                  familiarList={[
                    "C++",
                    "Lisp"]}
                />,
                <InlineListObject
                  title="Tools"
                  inlineList={[
                    "Git",
                    "Github"]}
                />
              ]}
            />
            <CategoryObject
              categoryName="Education"
              subcategories={[
                <EducationObject
                  university="Northeastern University"
                  degree="Computer Science and Mathematics, BS"
                  date="September 2018 - December 2021"
                  college="Khoury College of Computer and Informational Sciences"
                />
              ]}
            />
            <CategoryObject
              categoryName="Coursework"
              subcategories={[
                <InlineListObject
                  title="Computer Science"
                  inlineList={[
                    "Software Engineering",
                    "Object-Oriented Design"]}
                />,
                <InlineListObject
                  title="Mathematics"
                  inlineList={[
                    "Linear Algebra",
                    "Probability and Statistics"]}
                />
              ]}
            />
            <CategoryObject
              categoryName="Interests"
              subcategories={[
                <InlineListObject
                  title="Hobbies"
                  inlineList={[
                    "Video Games",
                    "Cooking and Baking"]}
                />,
                <InlineListObject
                  title="Professional"
                  inlineList={[
                    "Web Development",
                    "Web Design"]}
                />
              ]}
            />
          </div>
        </div>
    </main>
  </body>
  );
}

export default App;

import React from 'react';
import Header from 'components/Header';
import Experience from 'components/Experience';
import DSList from "components/DSList";
import TList from "components/TList";
import Education from 'components/Education';

function App() {
  return (
    <main>
      <Header
        name="James Raynor"
        github="jimmyray"
        location="Joeyray's Bar, Mar Sara"
        email="jim.raynor@gmail.com"
        phoneNumber="+1 (800) 444-4444"
      />
      <div className="main">
        <div>
          <section>
            <h2>Experience</h2>
            <Experience
              org="Raynor's Raiders"
              title="Commander"
              description={[
                "Lead an organization of freedom fighters against the Terran dominion",
                "Overturned a galactic dictatorship over the course of only five years",
                "Launched dozens of successful tactical strikes on highly defended targets",
              ]}
              date="March 2500 - Current"
              location="Koprulu Sector"
            />
          </section>
          <section>
            <h2>Projects</h2>
            <Experience
              org="Xel'naga Artifact"
              href="https://www.xelnaga.com/"
              link="xelnaga.com"
              description={[
                "Reconstructed an ancient artifact of unknown origins from several fragments",
                "Repurposed the artifact to extract foreign essence from an infested body",
                "Successfully purified the Queen of Blades, who was restored to her original form",
              ]}
              date="October - December 2504"
            />
          </section>
        </div>
        <div>
          <section>
            <h2>Skills</h2>
            <TList
              title="Languages"
              titleList={[
                {
                  title: "Experienced:",
                  items: [
                    "Javascript",
                    "Typescript",
                  ]
                },
                {
                  title: "Familiar:",
                  items: [
                    "C++",
                    "Lisp",
                  ]
                }]
              }
            />
            <DSList
              title="Tools"
              items={[
                "Git",
                "Github",
              ]}
            />
          </section>
          <section>
            <h2>Education</h2>
            <Education
              university="Northeastern University"
              degree="Computer Science and Mathematics, BS"
              date="September 2018 - December 2021"
              college="Khoury College of Computer and Informational Sciences"
            />
          </section>
          <section>
            <h2>Coursework</h2>
            <DSList
              title="Computer Science"
              items={[
                "Software Engineering",
                "Object-Oriented Design",
                "Whether we want it or not",
                "We've stepped into a war with the cabal on mars",
              ]}
            />
            <DSList
              title="Mathematics"
              items={[
                "Linear Algebra",
                "Probability and Statistics",
              ]}
            />
          </section>
          <section>
            <h2>Interests</h2>
            <DSList
              title="Hobbies"
              items={[
                "Video Games",
                "Cooking and Baking",
              ]}
            />
            <DSList
              title="Professional"
              items={[
                "Web Development",
                "Web Design",
              ]}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;

<template>
  <div class="index">
    <!-- <div class="alert">
      <countdown-timer
        starttime="Feb 25, 2020 06:24:25"
        endtime="May 15, 2020 12:00:00"
        trans='{  
          "day":"Day",
          "hours":"Hours",
          "minutes":"Minuts",
          "seconds":"Seconds",
          "expired":"Please contact the administrator (hrishirich619@gmail.com).",
          "running":"Site Launch CountDown",
          "upcoming":"Till start of event.",
          "status": {
            "expired":"We apologise fior the delay, Please come back tomorrow.",
            "running":"Site is being currently updated.",
            "upcoming":"Future"
          }
        }'
      /> 
    </div> -->
    <!-- <article>
      
      <section class="welcomeText">
        <div>
          <vue-img :src="logo" alt="Kkiokio Logo" />
        </div>
        <div>
          <q
            >A little
            <abbr
              title="The action of understanding, being aware of, being sensitive to, and vicariously experiencing the feelings, thoughts, and experience of another of either the past or present without having the feelings, thoughts, and experience fully communicated in an objectively explicit manner"
            >
              Empathy
            </abbr>
            goes a long way
          </q>
        </div>
        <div>
          <b>Scroll Down</b>
          <span class="far fa-arrow-alt-circle-down fa-3x" />
        </div>
      </section>
      <section id="aboutMe">
        <div>
          <vue-img :src="profilePic" alt="Hrishikesh Karale profile Picture" />
        </div>
        <div>
          <h2>Hrishikesh Karale</h2>
        </div>
        <div>
          <h3>UX Professional</h3>
        </div>
        <div>
          <h4>Full Stack Designer</h4>
        </div>
        <div>
          <vue-button
            buttonName="gotoButton"
            buttonText="Click here to know more about me"
            buttonIcon="fas fa-link"
            buttonStyle="text-sm"
            :onClickAction="() => this.$router.push({ path: `/About Me` })"
          />
        </div>
        <div class="process">
          <ol class="step-indicator">
            <li v-for="(step, index) in steps" :key="index">
              <span class="step">
                {{ step.title }}
              </span>
              <b class="step-title">{{ step.subTitle }}</b>
              <ol>
                <li v-for="skill in step.skills" :key="skill">
                  {{ skill }}
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </section>
    </article> -->
    <div class="welcomeText">
      <div>
        <vue-img :src="logo" alt="Kkiokio Logo" />
      </div>
      <div>
        <q
          >A little
          <abbr
            title="The action of understanding, being aware of, being sensitive to, and vicariously experiencing the feelings, thoughts, and experience of another of either the past or present without having the feelings, thoughts, and experience fully communicated in an objectively explicit manner"
          >
            Empathy
          </abbr>
          goes a long way
        </q>
      </div>
      <div>
        <b>Scroll Down</b>
        <span class="far fa-arrow-alt-circle-down fa-3x" />
      </div>
    </div>
    <div id="aboutMe">
      <div>
        <vue-img :src="profilePic" alt="Hrishikesh Karale profile Picture" />
      </div>
      <div>
        <h2>Hrishikesh Karale</h2>
      </div>
      <div>
        <h3>UX Professional</h3>
      </div>
      <div>
        <h4>Full Stack Designer</h4>
      </div>
      <div>
        <vue-button
          buttonName="gotoButton"
          buttonText="Click here to know more about me"
          buttonIcon="fas fa-link"
          buttonStyle="text-sm"
          :onClickAction="() => this.$router.push({ path: `/About Me` })"
        />
      </div>
      <div class="process">
        <ol class="step-indicator">
          <li v-for="(step, index) in steps" :key="index">
            <span class="step">
              {{ step.title }}
            </span>
            <b class="step-title">{{ step.subTitle }}</b>
            <ol>
              <li v-for="skill in step.skills" :key="skill">
                {{ skill }}
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <!-- <div>
        <div v-for="skill in skills" :key="skill">
          <span class="fas fa-sitemap fa-2x" />
          <div>{{ skill }}</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import CountdownTimer from "@/components/countdownTimer.vue";
import vueImg from "@/components/vueImg.vue";
import vueButton from "@/components/vueButton.vue";

export default {
  name: "index",
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profilePic = require("@/../public/img/profilePic.jpg");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    const steps = [
      {
        id: 1,
        subTitle: "Empathasize, Understand and Define the problem.",
        skills: [
          "Job Mapping",
          "Mental Models",
          "Buisness opportunities",
          "Goals and Metrics"
        ],
        title: "Define"
      },
      {
        id: 2,
        subTitle: "Collect and Analyze pre-existing Solutions",
        skills: ["User Reaseach and Analysis", "Competitive Analysis"],
        title: "Research"
      },
      {
        id: 3,
        subTitle: "Brainstorm with Stakeholders",
        skills: ["System Desing / IA", "User Flow", "Feature Mapping"],
        title: "Ideate"
      },
      {
        id: 4,
        subTitle:
          "Sketch Ideas and exploring multiple approaches to solving the problem",
        skills: ["Concept Sketches", "Wireframes", "Positioning"],
        title: "Design"
      },
      {
        id: 5,
        subTitle: "Create mocks and Test them with stakeholders",
        skills: ["Concept Testing", "Content Inventory", "Prototype"],
        title: "FeedBack"
      },
      {
        id: 6,
        subTitle:
          "Refine the concepts and provide a detailed design for the best solution",
        skills: ["Visual Design", "Usability Testing", "Copy Decks"],
        title: "Refine"
      },
      {
        id: 7,
        subTitle:
          "Provide taskflows and other documentation to the developers and work alongside them to deliver",
        skills: [
          "Eng and Design Build",
          "Design QA",
          "Measure Success",
          "Customer Validation",
          "Marketting Assets"
        ],
        title: "Build"
      },
      {
        id: 7,
        subTitle:
          "Asses how delivered solution measures up to the initial goals and metrics",
        skills: [
          "Team Feedback",
          "Enhancements",
          "Measure and Optimize",
          "Feature Roadmap"
        ],
        title: "Test"
      }
    ];
    const skills = [
      "Information Architecture",
      " Wireframing",
      "Sketching",
      "Usability Testing",
      "Storyboarding",
      "User Experience Project (UED)",
      "User Experience (UX)",
      "Web Project",
      "Interaction Project",
      "User-centered Project",
      "Human Factors",
      "Human Computer Interaction",
      "Usability",
      "Project Thinking",
      "SASS",
      "D3.js",
      "Java",
      "C#",
      "HTML5",
      "JavaScript",
      "JQUERY",
      "Cascading Style Sheets (CSS)",
      "Adobe Illustrator",
      "git",
      "Adobe Creative Suite",
      "LESS",
      "Prototyping",
      "Vue.js",
      "React.js",
      "inVision",
      "Case Studies",
      "User Interface Prototyping",
      "User Stories",
      "User Journeys",
      "User Interaction",
      "User Research",
      "User Experience Testing",
      "Qualitative & Quantitative Research Methodologies",
      "Conjoint Analysis",
      "TypeScript",
      "Mockups",
      "User Flows",
      "Card Sorting"
    ];
    return {
      steps,
      profilePic,
      logo,
      skills
    };
  },
  components: {
    // CountdownTimer,
    vueButton,
    vueImg
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

@wizard-color-neutral: #ccc;
@wizard-color-active: #4183d7;
@wizard-color-complete: #87d37c;
@wizard-step-width-height: 120px;
@wizard-step-font-size: 20px;

div {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  &.index {
    & > div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      &.alert {
        display: flex;
        flex-direction: column;
        background-color: red;
        padding: 8px 16px;
        position: absolute;
        border-radius: 8px;
        top: 80px;
        width: 80vw;
        color: white;
        text-align: center;
        .boxShadow(@one);

        & > div {
          display: flex;
          flex-direction: row;
        }
      }

      &#aboutMe {
        display: flex;
        min-height: 80vh;

        & > div {
          text-align: center;

          &.process {
            display: flex;
            flex-direction: column;
            margin-top: 32px;

            & > ol.step-indicator {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              margin: 0 auto;

              & > li {
                display: flex;
                flex-direction: column;
                background-color: #fafbfc;
                flex: 1 240px;
                border-radius: 8px;
                padding: 16px;
                margin: 16px 32px;
                .boxShadow(@two);

                & > .step {
                  border-radius: 50%;
                  border: 2px solid @primaryColor;
                  color: white;
                  font-size: @wizard-step-font-size;
                  line-height: @wizard-step-width-height;
                  position: relative;
                  width: @wizard-step-width-height;
                  text-align: center;
                  margin: 16px auto;
                  background-color: @secondaryColor;

                  & + .step-title {
                    text-align: left;

                    & + ol {
                      list-style: none;
                      padding: 0;

                      & > li {
                        margin-top: 8px;
                      }
                    }
                  }
                }
              }
            }
          }

          & > img {
            margin: auto;
            height: 320px;
            width: 320px;
            clip-path: circle(120px at center);
          }
        }
      }

      &.welcomeText {
        min-height: 100vh;

        & > div {
          text-align: center;

          & > b {
            display: block;
            color: @cometText;
          }

          & > span {
            position: relative;
            color: @secondaryColor;
          }

          & > img {
            margin: 8vh 0 4vh 0;
            height: 40vh;
          }

          & > q {
            margin: 4vh 0;
            font-size: 4vw;
            text-align: center;

            & > abbr {
              color: #fbce51;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>

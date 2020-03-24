<template>
  <div class="about">
    <div class="title">
      <h1>Hrishikesh Karale</h1>
      <p>
        Hello, I am located in Upstate New York area.
        <br />
        Feel free to use the contact form below and reach out to me for any
        questions yo might have.
        <br />
        You can also write to me the old fashion way.
      </p>
    </div>
    <article>
      <div class="bio">
        <div>
          <vue-img :src="profilePic" alt="Hrishikesh Karale profile Picture" />
        </div>
        <div>
          <p>
            I'm a UX Professional with 3+ years of experience working on several
            major software projects in healthcare, eCommerce and enterprise
            environments. My primary objectives are to Project interfaces that
            can solve problems and create experiences that initiate a sense of
            delight and wonder for my users.
          </p>
          <p>
            Having both a Project and Development background allows me to
            balance both the needs of the end-user as well as the business goals
            of the company. As a UX Projecter, I strive to use a constant
            end-user feedback loop to define and redefine my project objectives.
            The user's needs guide the strategic decisions I make during my UX
            process. This non-linear approach is integral to ensuring that my
            Project decisions lead to a massive improvement in the key metrics
            that are relevant to the user experience. I also strictly make sure
            that my Project decisions can be implemented in the final product
            without compromising the project timeline. In short, I like to think
            like an engineer, data-scientist and marketer in addition to being a
            UX Projecter.
          </p>
          <p>
            I’m also a novice visual Projecter. I’ve Projected over 30 working
            prototypes in online-shopping, warehouse-management,
            inventory-management, fulfillment and healthcare using a multitude
            of prototyping tools including products from Adobe Creative Cloud,
            Sketch and Figma. My prototyping strategy primarily focuses on
            functionality and usability.
          </p>
        </div>
      </div>
      <div class="skillset">
        <div v-for="skill in skills" :key="skill.type">
          <h3>{{ skill.type }}</h3>
          <div v-for="value in skill.value" :key="value">
            {{ value }}
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import vueImg from "@/components/vueImg.vue";
export default {
  name: "about",
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profilePic = require("../../public/img/profilePic.jpg");
    const skills = [
      {
        type: "Industry Knowledge",
        value: [
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
          "Project Thinking"
        ]
      },
      {
        type: "Tools & Technologies",
        value: [
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
          "inVision"
        ]
      },
      {
        type: "Other skills",
        value: [
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
        ]
      }
    ];
    return {
      profilePic,
      skills
    };
  },
  components: {
    vueImg
  }
};
</script>

<style lang="less" scoped>
.about {
  & > .title {
    & > h1 {
      text-align: center;
      & + p {
        font-size: 18px;
        text-align: center;
      }
    }
  }
  & > article {
    display: flex;
    flex-direction: column;
    & > .title {
      margin-bottom: 8vh;
      & > h1 {
        text-align: center;
        & + p {
          font-size: 18px;
          text-align: center;
        }
      }
    }
    & > div {
      display: flex;
      &.skillset {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
      }
      &.bio {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        & > div {
          margin: 8vh 0 8vh 0;
          & > img {
            max-height: 60vh;
            min-height: 320px;
          }
          & > p {
            max-width: 40vw;
            min-width: 480px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>

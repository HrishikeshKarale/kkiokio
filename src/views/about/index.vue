<template>
  <article class="about">
    <header>
      <h1>About Me</h1>
    </header>
    <section id="bio">
      <div>
        <vue-img :src="profilePic" alt="Hrishikesh Karale profile Picture" />
        <div>
          <h1>Hrishikesh Karale</h1>
          <h3>UX Professional</h3>
          <h4>Full Stack Designer</h4>
        </div>
      </div>
      <div>
        <p>
          I'm a UX Professional with 3+ years of experience working on several
          major software projects in the eCommerce and enterprise buisness
          environments.
        </p>
        <p>
          I have a Masters in HCI/Design and a Bachalors in Computer
          Engineering, this allows me to take development into consideration
          when designing a solution.
        </p>
        <p>
          As a UX Professional, I strive to use a constant end-user feedback
          loop to define and redefine my project objectives. The user's needs
          guide the strategic decisions I make during my UX process. This
          non-linear approach is integral to ensuring that my projects decisions
          lead to a massive improvement in the key metrics that are relevant to
          the user experience. In short, I like to think like an engineer in
          addition to being a UX Professional.
        </p>
        <p>
          I’m also a novice visual designer. I’ve designed over 30 working
          prototypes in online-shopping, warehouse-management,
          inventory-management, fulfillment and healthcare using a multitude of
          prototyping tools including products such as Adobe Illustrator, Adobe
          XD, Sketch and Figma. My prototyping strategy primarily focuses on
          functionality and usability.
        </p>
      </div>
    </section>
    <section id="objective">
      <q>
        Create intuitive interfaces that can solve problems and create
        experiences that initiate a sense of delight and wonder for my users.
      </q>
    </section>
    <section id="uxProcess">
      <p>
        One of the key factors that define a designers work is the process they
        use to solve a problem.
      </p>
      <p>
        With time, this process evolved from a standard 5 step prcoess of
        (define, research, ideate, prototype, Test) to a 8 step process where
        each step signifies a milestone for the projects.
      </p>
      <div class="process">
        <ol class="steps">
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
    <section id="skillset">
      <div v-for="skill in skillSet" :key="skill.type">
        <h3>{{ skill.type }}</h3>
        <div v-for="value in skill.value" :key="value">
          {{ value }}
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import vueImg from "@/components/vueImg.vue";
import { skills } from "@/store/skills";
import { uxProcess } from "@/store/uxProcess";

export default {
  name: "About",

  components: {
    vueImg
  },

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profilePic = require("@/../public/img/profilePic.jpg");
    const steps = uxProcess;
    const skillSet = skills;

    return {
      profilePic,
      skillSet,
      steps
    };
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";

@wizard-step-width-height: 120px;
@wizard-step-font-size: @fontSize;

article {
  &.about {
    & > section {
      &#objective {
        & > q {
          margin: auto;
          font-size: @fontSize * 2;
          text-align: center;

          & > abbr {
            color: #fbce51;
            text-decoration: none;
          }
        }
      }

      &#uxProcess {
        flex-direction: column;
        text-align: left;

        & > .process {
          margin-top: @spaceLg;

          & > ol.steps {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0 auto;

            & > li {
              display: flex;
              flex-direction: column;
              background-color: @backgroundColor;
              flex: 1 240px;
              border-radius: @borderRadiusLg;
              padding: @spaceLg;
              margin: @spaceLg @spaceXl;

              .boxShadow(@one);

              & > .step {
                border-radius: 50%;
                border: 2px solid @primaryColor;
                color: @white;
                font-size: @wizard-step-font-size;
                line-height: @wizard-step-width-height;
                position: relative;
                width: @wizard-step-width-height;
                text-align: center;
                margin: @spaceLg auto;
                background-color: @secondaryColor;

                & + .step-title {
                  text-align: left;

                  & + ol {
                    list-style: none;
                    padding: 0;

                    & > li {
                      margin-top: @spaceMd;
                    }
                  }
                }
              }
            }
          }
        }
      }

      &#skillset {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        & > div {
          flex-direction: column;
          justify-content: space-evenly;
        }
      }

      &#bio {
        flex-direction: column;
        flex-wrap: wrap;
        & > div {
          max-width: 960px;
          //image and introductory text
          &:first-child {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;

            & > div {
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: center;
              align-content: center;
              & > h1,
              & > h3,
              & > h4 {
                margin-top: 0;
              }
            }
            & > img {
              height: 320px;
              width: 320px;
              clip-path: circle(120px at center);
            }
          }
        }
      }
    }

    @media screen {
      @media (max-width: 1540px) {
        & > #bio {
          & > div:first-child {
            flex-wrap: wrap;
            & > div {
              margin-bottom: @spaceLg;
              & > h1,
              & > h3,
              & > h4 {
                align-self: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>

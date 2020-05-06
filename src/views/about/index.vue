<template>
  <div class="about">
    <scroll-indicator>
      <article>
        <header>
          <h1>About Me</h1>
        </header>
        <section id="bio">
          <div>
            <vue-img
              :src="profilePic"
              alt="Hrishikesh Karale profile Picture"
            />
            <div>
              <h1>Hrishikesh Karale</h1>
              <h3>UX Professional</h3>
              <h4>Full Stack Designer</h4>
            </div>
          </div>
          <div>
            <p>
              I'm a UX Professional with 3+ years of experience working on
              several major software projects in the eCommerce and enterprise
              environments.
            </p>
            <p>
              I have a Masters in HCI/Design and a Bachalors in Computer
              Engineering. This allows me to not just balance the needs of the
              end-user with the business goals but also lets me take development
              into consideration.
            </p>
            <p>
              As a UX Professional, I strive to use a constant end-user feedback
              loop to define and redefine my project objectives.
              <br />
              The user's needs guide the strategic decisions I make during my UX
              process. This non-linear approach is integral to ensuring that my
              projects decisions lead to a massive improvement in the key
              metrics that are relevant to the user experience. In short, I like
              to think like an engineer, data-scientist and marketer in addition
              to being a UX Professional.
            </p>
            <p>
              I’m also a novice visual designer. I’ve designed over 30 working
              prototypes in online-shopping, warehouse-management,
              inventory-management, fulfillment and healthcare using a multitude
              of prototyping tools including products such as Adobe Illustrator,
              Adobe XD, Sketch and Figma. My prototyping strategy primarily
              focuses on functionality and usability.
            </p>
          </div>
        </section>
        <section id="objective">
          <q>
            Create intuitive interfaces that can solve problems and create
            experiences that initiate a sense of delight and wonder for my
            users.
          </q>
        </section>
        <section id="uxProcess">
          <p>
            One of the key factors that define a designers work is the process
            they use to solve a problem.
          </p>
          <p>
            With time, this process evolved from a standard 5 step prcoess of
            (define, research, ideate, prototype, Test) to a 8 step process
            where each step signifies a milestone for the projects.
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
    </scroll-indicator>
  </div>
</template>

<script>
import vueImg from "@/components/vueImg.vue";
import scrollIndicator from "@/views/project/js/scrollIndicator/scrollIndicator.vue";
import { skills } from "@/store/skills";
import { uxProcess } from "@/store/uxProcess";

export default {
  name: "about",

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
  },

  components: {
    scrollIndicator,
    vueImg
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";

@wizard-color-neutral: #ccc;
@wizard-color-active: #4183d7;
@wizard-color-complete: #87d37c;
@wizard-step-width-height: 120px;
@wizard-step-font-size: @fontSize;

.about {
  article {
    display: flex;
    flex-direction: column;

    & > section {
      display: flex;

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
          margin-top: @spaceXl;

          & > ol.steps {
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
              padding: @spaceLg;
              margin: @spaceLg @spaceXl;

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
        justify-content: space-evenly;

        & > div {
          margin: auto;

          &:first-child {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            & > div {
              margin: auto;
            }
          }

          & > img {
            height: 320px;
            width: 320px;
            clip-path: circle(120px at center);
          }

          & > p {
            max-width: 60vw;
            min-width: 480px;
          }
        }
      }
    }
  }
}
</style>

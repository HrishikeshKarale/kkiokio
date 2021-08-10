<template>
  <article class="profileOverview">
    <section class="intro">
      <div>
        <span>HELLO THERE</span>
        <h2>
          My name is
        </h2>
        <h1 @click="$router.push({ name: 'about' })">
          Hrishikesh Karale.
        </h1>
        <h2>
          I design Things.
        </h2>
        <p>
          I am a <b>multi-disciplined designer</b> based out of Rochester, NY.
          My experience ranges from UI/UX Design to Front-End Development.
        </p>
        <p>
          As a Designer I am passionate about <b>Empathy</b> in design. I
          believe in setting ego aside and creating an experience that caters to
          my user needs. My ability to organised workflows, understand visual
          design language and solve problems shows in my work.
        </p>
        <vue-button
          tag="loginButton"
          category="border-sm"
          text="About me"
          icon="fas fa-sign-in-alt"
          :ctx="
            () => {
              $router.push({ name: 'about' });
            }
          "
        />
      </div>
      <div @click="$router.push({ name: 'project' })">
        <span>Designer</span>
        <span>&</span>
        <span>Developer</span>
      </div>
    </section>
    <section class="projects">
      <h1>
        WORK
      </h1>
      <h3>What I've been up to</h3>
      <p>
        Globally adopted software, high converting websites, emerging technology
        and beyond. This is a detailed chronicle of the stories, processes and
        results behind the projects that I've led and contributed to.
      </p>
      <div>
        <div v-for="(project, index) in projects" :key="index">
          <div>
            <router-link :to="{ name: 'project', hash: `#${project.type}` }">
              <h3>
                {{ project.type }}
              </h3>
            </router-link>
            <!-- {{ project.value.length }} projects -->
            <ul>
              <li
                v-for="skill in projectSkills[project.type]"
                :key="skill"
                @click="
                  $router.push({ name: 'project', query: { filter: skill } })
                "
              >
                <span class="fas fa-tag" />
                <b v-text="skill" />
              </li>
            </ul>
          </div>
          <!-- <template v-for="val in projectSkills">
          {{ val }}
        </template> -->
        </div>
      </div>
    </section>
    <section class="kindWords">
      <h1>
        Kind Words
      </h1>
      <h3>
        What people think about me
      </h3>
      <div>
        <div>
          <q>
            As a manager, you hope to hire people who are smarter than you,
            driven to make a big impact, and who constantly push themselves to
            grow–and Hrishikesh was certainly that. I learned a lot from him
            (his knowledge in UX design is unparalleled) and it was a joy
            working together.
          </q>
          <h5>Craig Swings</h5>
        </div>
        <div>
          <q>
            Hrishikesh, exhibits the experience and talent of someone twice his
            age in years. He is an incredible leader and has a way about him to
            get the most out of anyone. But most importantly, he's always eager
            to help others learn, grow and improve.
          </q>
          <h5>Junaid Shaikh</h5>
        </div>
        <div>
          <q>
            What I enjoyed most about working with Hrishikesh was his mix of
            to-the-point creative vision and direction, while providing it in
            one of the most humble ways I’ve encountered.
          </q>
          <h5>Justin</h5>
        </div>
      </div>
      <!-- <div v-for="(skill, index) in skillSet" :key="skill.type" class="skills">
        <infinite-scroll :list="skill.value" :reverse="index % 2 === 1" />
      </div> -->
    </section>
  </article>
</template>

<script>
// @ is an alias to /src
import vueButton from "@/components/vueButton.vue";
// import infiniteScroll from "@/views/project/css/infiniteScroll.vue";
// import { skills } from "@/store/skills";
import { projects } from "@/store/projects";

export default {
  name: "Home",
  components: {
    // infiniteScroll,
    vueButton
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profilePic = require("@/../public/img/profilePic.jpg");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    // const skillSet = skills;
    const projectSkills = {};
    return {
      // skillSet,
      profilePic,
      logo,
      projects,
      projectSkills
    };
  },
  mounted() {
    this.projects.forEach(project => {
      let uniqueArray = [];
      project.value.forEach(val => {
        uniqueArray = [...val.tags, ...uniqueArray];
      });
      this.projectSkills[project.type] = uniqueArray.filter(
        (v, i, a) => a.indexOf(v) === i
      );
    });
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.profileOverview {
  & > section {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    & > h1 {
      text-align: center;
      font-size: 92px;
      font-weight: 900;
      margin: 0;
      transform: translate(0, 64px);
      // opacity: 0.32;
      filter: opacity(32%);
    }
    & > h3 {
      text-align: center;
      color: @accentColor;
      z-index: @contentZ + 10;
      font-weight: 700;
      &::before {
        content: "";
        margin-left: 0;
      }
      & + p {
        align-self: center;
        width: 640px;
        text-align: center;
      }
    }
    &::before {
      display: none;
    }
    &.intro {
      justify-content: space-evenly;
      & > div {
        display: flex;
        flex-direction: column;
        height: fit-content;

        & > h1,
        & > h2:first-child {
          margin-top: 0;
          margin-bottom: 0;
          &:not(h2) {
            font-weight: bold;
          }
        }
        & > h1 {
          cursor: pointer;
        }
        & > h2 {
          color: @textColor;
        }
        & > p {
          max-width: 640px;
          margin-bottom: @spaceXl;
        }
        & > button {
          align-self: flex-end;
        }
        //design and develop box
        &:last-child {
          border: @borderRadius dashed @accentColor;
          height: 320px;
          width: 320px;
          border-radius: 25%;
          cursor: pointer;
          align-self: center;
          justify-content: space-evenly;
          & > span {
            font-size: 64px;
            align-self: center;
            padding: @spaceMd @spaceLg;
            font-weight: bold;
            transform: rotate(-45deg);
            &:first-child {
              align-self: flex-start;
            }
            &:nth-child(2) {
              padding: @spaceMd 0;
              transform: rotate(0deg);
            }
            &:last-child {
              align-self: flex-end;
            }
          }
        }
      }
    }
    &.kindWords {
      flex-direction: column;
      & > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 2 * @spaceXl;
        & > div {
          display: flex;
          flex-direction: column;
          border-radius: @borderRadiusLg;
          border: 1px dashed @primaryColor;
          flex: 1 0 240px;
          max-width: 30%;
          padding: @spaceXl;
          & > h5 {
            text-align: right;
            &::before {
              content: "-";
              margin-right: @spaceMd;
            }
          }
        }
      }
    }
    &.projects {
      flex-direction: column;
      justify-content: space-evenly;
      & > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 2 * @spaceXl;

        & > div {
          display: flex;
          flex-direction: column;
          flex: 0 1 48%;
          margin-bottom: @spaceLg;
          //project cards
          & > div {
            padding: 0 @spaceLg @spaceMd @spaceLg;
            border-radius: @borderRadiusLg;
            border: 1px dashed @primaryColor;
            & > a > h3 {
              cursor: pointer;
            }
            & > ul {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              // justify-content: space-evenly;
              & > li {
                font-size: @fontSizeSm;
                border-radius: @borderRadiusLg;
                padding: 0 @spaceMd !important;
                background-color: @secondaryColor;
                margin: @spaceSm;
                cursor: pointer;
                //tag icon
                & > span.fas {
                  color: @backgroundColor;
                  margin-right: @spaceMd;
                  transform: scale(0.8);
                }
                &:hover {
                  background-color: @accentColor;
                  .boxShadow(@four, @accentColor);
                  & > span {
                    transform: scale(1);
                  }
                  & > b {
                    color: @backgroundColor;
                  }
                }
              }
            }
            &:hover {
              .boxShadow(@three, @accentColor);
              border-color: transparent;
              & > a > h3 {
                color: @accentColor;
              }
            }
          }
        }
      }
    }
    &.skills {
      flex-direction: column;
      & > .skills {
        display: flex;
        flex-direction: column;
        height: 40px;
        width: 100%;
        background-color: @backgroundColor;
        &:first-child {
          background-color: #bf0a30;
          color: @offWhite;
        }
        &:last-child {
          background-color: #002868;
          color: @offWhite;
        }
      }
    }
  }

  @media screen {
    @media (max-width: @maxWidth) {
      flex-direction: column;
      & > section {
        flex-direction: column-reverse;
        margin-bottom: @spaceXl;
        &.intro {
          & > div {
            &:last-child {
              margin-top: 2 * @spaceXl;
              height: 240px;
              width: 240px;
              align-self: center;
              & > span {
                font-size: 2 * @fontSize;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="projects">
    <div class="title">
      <h1>projects</h1>
      <p>
        Currently My rojects
        <br />
        Feel free to use the contact form below and reach out to me for any
        questions yo might have.
        <br />
        You can also write to me the old fashion way.
      </p>
    </div>
    <div class="content">
      <router-view />
      <article>
        <section v-for="projects in projectsDescription" :key="projects.type">
          <h2>{{ projects.type }}</h2>
          <div>
            <div v-for="value in projects.value" :key="value.id">
              <router-link :to="value.link">
                <showcase :title="value.title" :subtitle="value.subtitle">
                  <p slot="description">
                    <span v-html="value.description" />
                  </p>
                </showcase>
              </router-link>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
import showcase from "@/components/showcase.vue";
export default {
  name: "projects",
  data() {
    const projectsDescription = [
      {
        type: "Mobile UX",
        value: [
          {
            id: 1,
            title: "Go Green",
            subtitle: "Onboarding Screen for the Go Green App",
            descritpion:
              "GoGreen is online IOS app, where user can select from a list of flora, customize planters according to their needs and place order easily.",
            link: "/projects/mobileUX//GoGreen"
          },
          {
            id: 2,
            title: "Culinarian",
            subtitle: "Food Recipie App",
            descritpion:
              "The Cullinarian App is an mobile aimed targetted towardsindividuals who like to cook.\
              <br />\
              The app walks users towards cooking home made cusines and thus promoting a healthy lifestyle.",
            link: "/projects/mobileUX//Culinarian"
          },
          {
            id: 3,
            title: "MedCo",
            subtitle: "UI Walkthrough and style guide",
            descritpion:
              "The Go Green App is an mobile aimed towards the medical industry.\
              <br />\
              Users can look up details of services offered by various hospitals and the cost associated with those services.",
            link: "/projects/mobileUX//MedCo"
          },
          {
            id: 4,
            title: "Fitness Friend",
            subtitle: "Concept idea, Styleguide",
            descritpion:
              "A Fitness tracker app for smart watch.\
              <br />\
              It helps its users keep track of their daily activity and vitals.",
            link: "/projects/mobileUX//FitnessFriend"
          },
          {
            id: 5,
            title: "AppSignUp",
            subtitle: "Login, SignUp Screens",
            descritpion: "Login/SignUp screen for a mobile app.",
            link: "/projects/mobileUX//AppSignUp"
          }
        ]
      },
      {
        type: "Web UX",
        value: [
          {
            id: 1,
            title: "Pack Station",
            subtitle: "Fulfillment Pack Station App",
            descritpion:
              "The pack station is projectsed to allow users to pack and ship orders.\
              <br />\
              Simple Pack supports orders with original packaging and default box items.",
            link: "/projects/WebUX/PackStation"
          },
          {
            id: 2,
            title: "RSVP",
            subtitle: "an interactive RSVP APP in progress..",
            descritpion: "details coming soon",
            link: "/projects/WebUX/RSVPApp"
          }
        ]
      },
      {
        type: "JS",
        value: [
          {
            id: 1,
            title: "DrumKit",
            subtitle: "Drum-kit",
            descritpion: "",
            link: "/projects/JS/DrumKit"
          },
          {
            id: 2,
            title: "AnalogCLock",
            subtitle: "Analogue Clock",
            descritpion: "",
            link: "/projects/JS/AnalogCLock"
          },
          {
            id: 3,
            title: "Array Cardio",
            subtitle: "Array Cardio (filter, sory, map, reduce)",
            descritpion: "",
            link: "/projects/JS/ArrayCardio"
          },
          {
            id: 4,
            title: "Image Gallery",
            subtitle: "Langing page/Image galery",
            descritpion: "",
            link: "/projects/JS/ImageGalery"
          },
          {
            id: 5,
            title: "Fetch API",
            subtitle: "Fetch API",
            descritpion: "",
            link: "/projects/JS/FetchApi"
          },
          {
            id: 6,
            title: "Canvas",
            subtitle: "HTML5 Canvas",
            descritpion: "",
            link: "/projects/JS/CanvasExample"
          },
          {
            id: 7,
            title: "CheckboxChallange",
            subtitle: "Checkbox Challange",
            descritpion: "",
            link: "/projects/JS/CheckboxChallange"
          },
          {
            id: 8,
            title: "KonamiCode",
            subtitle: "Konami Code",
            descritpion: "",
            link: "/projects/JS/KonamiCode"
          },
          {
            id: 9,
            title: "ScrollIn",
            subtitle: "Scroll JS",
            descritpion: "",
            link: "/projects/JS/ScrollIn"
          }
        ]
      }
    ];
    return {
      projectsDescription
    };
  },
  components: {
    showcase
  }
};
</script>

<style lang="less" scoped>
.projects {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 480px;
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
  & > .content {
    display: flex;
    flex-direction: column;

    & > article > section > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      & > a,
      & > a > * {
        text-decoration: none;
      }
    }
  }
}
</style>

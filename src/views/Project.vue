<template>
  <div class="Project">
    <div class="title">
      <h1>Project</h1>
      <p>
        Hello, I am located in Upstate New York area.
        <br />
        Feel free to use the contact form below and reach out to me for any
        questions yo might have.
        <br />
        You can also write to me the old fashion way.
      </p>
    </div>
    <div class="body">
      <template v-for="project in projectDescription">
        <h2 :key="project.type">{{ project.type }}</h2>
        <div :key="project">
          <div v-for="value in project.value" :key="value.id">
            <router-link :to="value.link">
              <showcase :title="value.title" :subtitle="value.subtitle">
                <p slot="description">
                  <span v-html="value.description" />
                </p>
              </showcase>
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import showcase from "@/components/showcase.vue";
export default {
  name: "project",
  data() {
    const projectDescription = [
      {
        type: "Mobile UX",
        value: [
          {
            id: 1,
            title: "Go Green",
            subtitle: "Onboarding Screen for the Go Green App",
            descritpion:
              "GoGreen is online IOS app, where user can select from a list of flora, customize planters according to their needs and place order easily.",
            link: "/Project/MobileUX//GoGreen"
          },
          {
            id: 2,
            title: "Culinarian",
            subtitle: "Food Recipie App",
            descritpion:
              "The Cullinarian App is an mobile aimed targetted towardsindividuals who like to cook.\
              <br />\
              The app walks users towards cooking home made cusines and thus promoting a healthy lifestyle.",
            link: "/Project/MobileUX//Culinarian"
          },
          {
            id: 3,
            title: "MedCo",
            subtitle: "UI Walkthrough and style guide",
            descritpion:
              "The Go Green App is an mobile aimed towards the medical industry.\
              <br />\
              Users can look up details of services offered by various hospitals and the cost associated with those services.",
            link: "/Project/MobileUX//MedCo"
          },
          {
            id: 4,
            title: "Fitness Friend",
            subtitle: "Concept idea, Styleguide",
            descritpion:
              "A Fitness tracker app for smart watch.\
              <br />\
              It helps its users keep track of their daily activity and vitals.",
            link: "/Project/MobileUX//FitnessFriend"
          },
          {
            id: 5,
            title: "App Login/SignUp",
            subtitle: "Login, SignUp Screens",
            descritpion: "Login/SignUp screen for a mobile app.",
            link: "/Project/MobileUX//SignUpApp"
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
              "The pack station is Projected to allow users to pack and ship orders.\
              <br />\
              Simple Pack supports orders with original packaging and default box items.",
            link: "/Project/web-UX/PackStation"
          },
          {
            id: 2,
            title: "RSVP",
            subtitle: "an interactive RSVP APP in progress..",
            descritpion: "details coming soon",
            link: "/Project/web-UX/RSVPApp"
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
            link: "/Project/JS/DrumKit"
          },
          {
            id: 2,
            title: "AnalogCLock",
            subtitle: "Analogue Clock",
            descritpion: "",
            link: "/Project/JS/AnalogCLock"
          },
          {
            id: 3,
            title: "Array Cardio",
            subtitle: "Array Cardio (filter, sory, map, reduce)",
            descritpion: "",
            link: "/Project/JS/ArrayCardio"
          },
          {
            id: 4,
            title: "Image Gallery",
            subtitle: "Langing page/Image galery",
            descritpion: "",
            link: "/Project/JS/ImageGalery"
          },
          {
            id: 5,
            title: "Fetch API",
            subtitle: "Fetch API",
            descritpion: "",
            link: "/Project/JS/FetchApi"
          },
          {
            id: 6,
            title: "Canvas",
            subtitle: "HTML5 Canvas",
            descritpion: "",
            link: "/Project/JS/CanvasExample"
          },
          {
            id: 7,
            title: "CheckboxChallange",
            subtitle: "Checkbox Challange",
            descritpion: "",
            link: "/Project/JS/CheckboxChallange"
          },
          {
            id: 8,
            title: "KonamiCode",
            subtitle: "Konami Code",
            descritpion: "",
            link: "/Project/JS/KonamiCode"
          },
          {
            id: 9,
            title: "ScrollIn",
            subtitle: "Scroll JS",
            descritpion: "",
            link: "/Project/JS/ScrollIn"
          }
        ]
      }
    ];
    return {
      projectDescription
    };
  },
  components: {
    showcase
  }
};
</script>

<style lang="less" scoped>
.Project {
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
  & > .body {
    display: flex;
    flex-direction: column;

    & > div {
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

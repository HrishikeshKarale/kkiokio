// https://abhishekkaushal.com/portfolio-showcase/people-matters-cohort/
<template>
  <article class="tinyThoughts">
    <h2>tinyThoughts</h2>
    <vue-img :src="headerImage" alt="" />
    <section id="About">
      <h3>About the project</h3>
      <p>
        <strong>Overview:</strong>
        Based on the
        <a href="https://tinythoughts.me/" target="_blank" rel="noopener">
          TinyThoughts
        </a>
        Web-app by
        <a href="http://jessis.cool/">Jess</a>, This app is a one sentence a day
        journaling app available for both Android and iOS. Even though there are
        many journaling apps available out there, what makes tinythoughts
        different from them is that it lets you write a summary of your day in
        280 words or less. It also gives you daily prompts and reminders to help
        you write better. This redesign was part of my personal project with the
        aim of enhancing the user experience as well as increasing app
        engagement.
      </p>
      <p>
        <strong>Duration:</strong>
        1 Week
      </p>
      <p>
        <strong>Role:</strong>
        UX Designer
      </p>
      <p>
        <strong>Skills:</strong>
        Competitor Analysis, Interface design, User Stories,Wireframing,
        Information Architecture
      </p>
      <p>
        <strong>Solution:</strong>
        I came up with a redesign concept for the Android app with the motive of
        enhancing the overall experience so that the app is more engaging. I
        wanted to get rid of the unnecessary clutter within the app and make it
        more usable for people who use it as their go to journaling app.
      </p>
    </section>
    <section id="Research">
      <h3>Research</h3>
      <p>
        As a person who tries to maintain a daily journal, I have tried a lot of
        tools that haven’t been useful. I came to know about the app when its
        creator (Jess Robins) submitted it on
        <a
          href="https://www.producthunt.com/posts/tinythoughts-for-mobile"
          target="_blank"
          rel="noopener"
          >ProductHunt</a
        >. I decided to give it a shot and I was really impressed by the idea of
        this app. The selling point was that you write your daily journal in 280
        words or less and the app actually gives you daily prompts in order to
        write better.
      </p>
      <p>
        I started to use this as my daily digital journaling app because of its
        simplicity. After using it for a couple of days I figured out that the
        current experience could be improved by implementing certain changes
        within the app. This idea came to me after reading couple of comments on
        ProductHunt as well as the official app reviews. I personally wanted
        these changes as well so I decided to give it a shot. Here are the
        screenshots of the current app discussing some features along with some
        of the associated issues –
      </p>
      <div class="subSection">
        <h4>Use of navigation drawer</h4>
        <vue-img :src="navDrawer" alt="" />
        <p>
          As you can see, the navigation drawer is used as go-to navigation for
          the whole app. Now a drawer navigation is good when you have at least
          5-7 primary views (Gmail’s Android app is a good example for this).
          But in our case we only have 2 primary views – Home & Settings. Things
          like logout and contact support can be grouped under settings so I
          believe those don’t count.
        </p>
        <p>
          Plus you have to perform an extra step in order to reach the
          navigation (either swipe or tapping the hamburger menu). A bottom
          navigation would be a good option in this case and Google also
          suggests using it for 3-5 primary destinations in its
          <a
            href="https://material.io/components/bottom-navigation/#usage"
            target="_blank"
            rel="noopener"
            >Material Guidelines</a
          >.
        </p>
      </div>
      <div class="subSection">
        <h4>Image upload & journal editing</h4>
        <vue-img :src="editJournal" alt="" />
        <p>
          While uploading an image I thought that I could upload multiple times.
          After uploading the first one I tapped the image icon again in order
          to add the second but it ended up replacing the first one. I came to
          know that you can only upload one image at a time. Basically no
          affordance was given to me to confirm whether I want to replace the
          current image or not!
        </p>
        <p>
          One really awesome feature that I like is the use of
          <b>sentiment analysis</b>
          while writing the journal. The app can depict your mood while you are
          typing and comes up with these unique hashtags e.g. #positive-mood.
          This feature is well implemented and I really like it. Currently you
          can see your mood over a period of time only in the web application,
          so I took some cues from there and tried to implement in the redesign.
        </p>
      </div>
      <div class="subSection">
        <h4>App settings & hashtags</h4>
        <vue-img :src="appSettings" alt="" />
        <p>
          As discussed previously, options like logout and contact support can
          be added within the app settings itself rather than placing it in the
          app drawer. Another thing that I feel like is missing from the app is
          presence of a search bar. As people keep writing a new journal
          everyday, they would like to reflect on what they wrote say 6 months
          back by typing a specific word or keyphrase.
        </p>
        <p>
          I went through most of the comments on ProductHunt and also saw some
          reviews on Google Play Store. I recognized the following
          <b>pain points</b>
          that came out of that analysis:
        </p>
        <ol>
          <li>
            There should be an option to turn on/off daily prompts. Some people
            don’t find the prompts to be helpful and would prefer not to use
            them while typing their journal.
          </li>
          <li>
            Some of them were facing the same image upload issue that I came
            across. People would like to be informed about the upload limit so
            that their initial upload does not get replaced with a new one.
          </li>
          <li>
            They would like to see statistics about their past mood trends as
            present in the web application.
          </li>
          <li>
            It would be a good option to have a search functionality within the
            app so that previous entry can be easily searched once the journal
            list starts to get longer.
          </li>
        </ol>
      </div>
    </section>
    <section id="Analysis and Ideation">
      <h3>Analysis and Ideation</h3>
      <p>
        Keeping in mind the current features, I went on to prioritize more
        features that I came across in my research. Rather than doing a major
        overhaul, I wanted to keep the basic features intact and iterate on
        making the experience better. After creating a list of additional
        changes and features, I went on to write user stories that would serve
        as the base for my redesign.
      </p>
      <div class="subSection">
        <h4>User stories</h4>
        <vue-img :src="userStories" alt="" />
      </div>
      <div class="subSection">
        <h4>Information Architecture</h4>
        <vue-img :src="IA" alt="" />
        <p>
          The app also needed a restructured information architecture in order
          to accommodate the updated features. I went through the Tinythoughts
          web application in order to see how its navigation differs from the
          mobile app navigation.
        </p>
        <p>
          <b>TimeLine:</b>
          Shows all your journal entries
        </p>
        <p>
          <b>Gallery:</b>
          A gallery for all the uploaded images (Premium feature)
        </p>
        <p>
          <b>Mood:</b>
          Shows mood trends over the selected time period (Premium feature)
        </p>
        <p>
          These had to be included in the app as well in order to make a
          consistent experience across all platforms.
        </p>
        <vue-img :src="IA2" alt="" />
        <p>
          I have not tried the premium features yet but I had some ideas of how
          these could be implemented within the mobile app. So after analyzing
          and ideating, I went on to make the final prototypes.
        </p>
      </div>
    </section>
    <section id="Prototype">
      <h3>Prototype</h3>
      <div class="subSection">
        <h4>Paper Wireframes</h4>
        <p>
          I usually begin implementing by ideas on pen and paper rather than
          directly going on to the screen. I feel like paper wireframes is the
          cheapest and least time consuming way to experiment with multiple
          ideas. Here is some of the clutter that I generated.
        </p>
        <vue-img :src="sketch" alt="" />
        <vue-img :src="sketch2" alt="" />
      </div>
      <div class="subSection">
        <h4>High fidelity designs</h4>
        <p>
          Pixel pushing time! I wanted to keep the primary color as it is
          because it’s currently being used on both mobile as the web
          application, hence adhering to the brand guidelines.
        </p>
        <vue-img :src="design" alt="" />
      </div>
    </section>
    <section id="Conclusion">
      <h4>Conclusion &amp; Lessons learned</h4>
      <p>
        I shared a working prototype of the redesign with my fellow UX
        Professionals. They appreciated the fact that I took time to clean up
        the current design and made it more usable. I came to know that this app
        was started as a side project by the original Jess (Original Creator)
        and right now is used by many people as their go to daily journaling
        app. While Jess is looking to bring new updates in the future I will
        also be revisiting the app in the near future to look into the
        functionality that could be added to this platform.
      </p>
      <p>
        Who knows these redesigned bits might end up getting implemented in the
        a version ofmy own app! On the other hand I gained a better
        understanding about Google’s Material Guidelines and how to use it in
        order to design more consistent interfaces.
      </p>
    </section>
  </article>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
import * as appSettings from "@/assets/UX/tinyThoughts/appSettings.png";
import * as design from "@/assets/UX/tinyThoughts/design.png";
import * as editJournal from "@/assets/UX/tinyThoughts/editJournal.png";
import * as headerImage from "@/assets/UX/tinyThoughts/headerImage.jpg";
import * as IA from "@/assets/UX/tinyThoughts/IA.png";
import * as IA2 from "@/assets/UX/tinyThoughts/IA2.png";
import * as navDrawer from "@/assets/UX/tinyThoughts/navDrawer.png";
import * as sketch from "@/assets/UX/tinyThoughts/sketch.jpg";
import * as sketch2 from "@/assets/UX/tinyThoughts/sketch2.jpg";
import * as userStories from "@/assets/UX/tinyThoughts/userStories.png";
export default {
  name: "TinyThoughts",
  components: { vueImg },
  data() {
    return {
      appSettings,
      editJournal,
      design,
      headerImage,
      IA,
      IA2,
      navDrawer,
      sketch,
      sketch2,
      userStories
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.tinyThoughts {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

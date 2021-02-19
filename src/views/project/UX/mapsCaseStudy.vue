// https://usabilitygeek.com/ux-case-study-google-maps-vs-waze-mobile-apps/
<template>
  <article class="mapsCaseStudy">
    <h2>Google Maps vs Waze Case Study</h2>
    <vue-img :src="headerImage" alt="" />
    <p>
      Today, we are back in business with another app showdown! To give a recap
      for those of you that are new here: in this UX case study series, we put
      two similar apps head-to-head and see which boasts the better UX.
    </p>
    <p>
      The last matchup we looked at Shopify and Apple Music, with Shopify taking
      the gold when it comes to the user’s experience. In this Olympic style
      face-off, I am going to be looking at two of the most popular navigation
      apps: Google Maps and Waze.
    </p>
    <p>
      Personally, I am rather excited for this matchup, as I am the ideal
      candidate. I continuously use navigation while I drive and just so happen
      to be terrible with directions.
    </p>
    <p>
      So throughout this matchup, I am also going to be turning introspectively,
      asking myself, “which of these apps do I believe can get me to a
      destination without getting lost?”
    </p>
    <p>
      am going to analyse the UX of these navigation apps and determine, for my
      bad navigators everywhere, which is worth their time.
    </p>
    <p>
      Let us buckle up and get ready to go full throttle into the UX of these
      navigation apps.
    </p>
    <section id="Home Screen">
      <h3>Home Screen</h3>
      <p>
        The first thing that a user sees when they launch each of the apps after
        a brief onboarding process is their multidimensional map screens.
      </p>
      <p>
        The UI is simple and functional for each. As a user arrives in each of
        the home screens, they have a clear idea of the locality of themselves,
        in contrast to their surroundings. Each app was extremely responsive: a
        user could pinch and swipe the screen to take a bird’s eye view of the
        map.
      </p>
      <vue-img :src="home" alt="" />
      <p>
        As we place Waze’s home screen next to Google Maps’ screen, we
        immediately begin to see stark contrasts in their design choices. Waze
        has a much more crowded interface, while Google Maps has a cleaner one.
        Waze’s is more playful; Google’s a bit more utilitarian.
      </p>
      <p>
        However, Waze’s design makes it easier for their user to customise their
        navigation experience and offers more functionality. Although a messier
        design, their popups on the map alert their driver of traffic,
        construction, restaurants in their area, photo enforced traffic lights,
        police officers, and other Wazers.
      </p>
      <p>
        With a cleaner interface, Google Maps sacrifices their experience
        feature list, to a degree. They do not provide their users with as many
        options to get an idea of their surroundings while they are driving.
      </p>
      <p>
        As we look at the UX of these two apps, Waze outshines Google Maps in
        the way that they give their users an updated and in-depth way to grasp
        what is in their vicinity. In this battle of the home screens, Waze
        takes the cake.
      </p>
      <b>Winner: Waze</b>
    </section>
    <section id="Search">
      <h2>Search Options</h2>
      <p>
        One of the other most essential elements in a navigation app is the
        ability for the user to search for and enter their destination.
        Moreover, both navigation apps similarly present this search option.
      </p>
      <p>
        At the top each screen, each app has their search bar. So the function
        of this feature could be understood by any user, with any range of
        experience. Waze asks “Where to?” while Google Maps tells users to
        “Search here.”
      </p>
      <vue-img :src="search" alt="" />
      <p>
        However, each app varies with the level of modification that they are
        able to provide their user. Waze gives their user popular search
        modifications through their use of graphics: their fork image stands for
        food, the gas can for gas stations … you get the idea.
      </p>
      <p>
        Google Maps, on the other hand, presents their suggestions with flashy
        and eye-catching graphics, to show their users what is in the area. They
        even include a ranking list of what ‘foodies’ like in the area.
      </p>
      <p>
        With a sleek and captivating design choice, I have to give Google Maps
        the win in this category. Google Maps streamlines the search process for
        their users and makes these options pop with the UI that they were
        paired with.
      </p>
      <b>Winner: Google Maps</b>
    </section>
    <section id="Navigation">
      <h3>Navigation Itself</h3>
      <p>
        For bad navigators everywhere, the moment you have been waiting for:
        which app offers the better navigating experience.
      </p>
      <p>
        For this UX showdown, I chose to go to my local Starbucks and requested
        that each app take me there.
      </p>
      <p>
        Lining up these interfaces next to one another, they are almost opposite
        in their design. Waze’s popup is chock-full of buttons and navigation
        options, with their ETA being the most significant number in the screen;
        whereas, Google Maps has the directions to the location neatly stacked
        down the screen.
      </p>
      <vue-img :src="nav" alt="" />
      <p>
        Google Maps is going with the ‘less is more’ approach. However, Waze is
        using all of their screen space for customisations that a driver could
        use to modify their experience better.
      </p>
      <p>
        Moreover, if we look at which of these options would give the user the
        most information to enhance their driving experience, Waze would win
        hands-down. With their app, a user can get different route options, a
        way to stop, a way to send their ETA, and can easily see their arrival
        time/the distance.
      </p>
      <p>
        When it comes to bad navigators far and wide, I speak for them when I
        say: Waze wins this navigation challenge.
      </p>
      <b>Winner: Waze</b>
    </section>
    <section id="Conclusion">
      <h2>Looking At The Scoreboard</h2>
      <p>
        Although it may surprise most (because of its App Store ranking), I have
        to deem Waze as the winner of this challenge. While both apps provide a
        navigating experience on an easy to understand interface, Waze provided
        more customisation options for their user’s routes.
      </p>
      <p>
        While Google Maps takes the cake in its UI, Waze beats out this
        navigating giant in the experience they provide their user.
      </p>
    </section>
  </article>
</template>
<script>
import vueImg from "@/components/vueImg.vue";

import * as headerImage from "@/assets/UX/maps/headerImage.jpg";
import * as nav from "@/assets/UX/maps/nav.jpg";
import * as home from "@/assets/UX/maps/home.jpg";
import * as search from "@/assets/UX/maps/search.jpg";

export default {
  name: "MapsCaseStudy",
  components: {
    vueImg
  },
  data() {
    return {
      headerImage,
      nav,
      home,
      search
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.mapsCaseStudy {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

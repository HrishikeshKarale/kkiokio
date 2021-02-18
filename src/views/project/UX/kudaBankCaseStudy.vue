//
https://medium.com/@DEJIDOPE/case-study-kudabank-website-redesign-pixelup-assessment-148a485b0bc4
<template>
  <article class="kudaBankCaseStudy">
    <h2>kudaBank Case Study Website redesign</h2>
    <p>
      The task was to redesign a website or an app and do a proper case study
      for it. I chose Kuda Bank’s website as I felt they didn’t put enough
      effort into it has their main focus is their app. Image for post
    </p>
    <vue-img :src="original" alt="" />
    <vue-img :src="redesign" alt="" />
    <section id="Process">
      <h3>The thought process behind the redesign.</h3>
      <p>
        Kuda bank is a digital bank, they have no physical branches. You can
        open an account and perform transactions, talk to a customer care
        representative using just the app which can be downloaded on any
        device(iOS and android). Their tag line is “ We are the bank of the
        free”, the free means most of the charges that traditional banks impose
        on their customers are free on Kuda bank, which is one of the incentives
        they are using to draw in customers to their service.
      </p>
      <vue-img :src="sketch" alt="" />
      <vue-img :src="sketch1" alt="" />
      <vue-img :src="sketch2" alt="" />
      <vue-img :src="sketch3" alt="" />
      <vue-img :src="sketch4" alt="" />
      <vue-img :src="sketch5" alt="" />
      <vue-img :src="sketch6" alt="" />
      <p>
        In the first section which is the header/hero section, readers should
        get an immediate idea of what the product/service is. On kuda’s current
        site, there’s a tag line which reads “We are the bank of the free” with
        a CTA underneath that reads “Get kuda” which leads to a new page where
        users can download for either iOS or android when clicked which I feel
        is bad UX and an iPhone illustration by the right. For my header
        redesign, I added both CTAs for the apple store and google store, so
        users immediately know that the Kuda app is available for both platforms
        and choose whichever one they use without having to go to another page.
      </p>
      <p>
        The next section which is the main/body section on the current site
        shows Kuda bank highlight the benefits of banking with them and what
        fees users would normally get charged for on traditional banks that they
        will get for free using Kuda bank which is one of their main selling
        points. The way the benefits are highlighted on the site is not in an
        orderly way although I feel it was done on purpose, I decided to
        highlight the benefits users will get in a more detailed format for
        better readability.
      </p>
      <p>
        Right below the benefits section is a step y step guide on how to sign
        up to kuda bank and start making use of the app, although it requires
        the user to click on each step, I felt it would be easier to just lay
        out the steps at a glance without needing the users to click on
        anything.
      </p>
      <p>
        Next, I added a testimonial section to also serve as “social proof” to
        convince users that still had doubts about the authenticity of the
        product, so they would be fully convinced hearing from people who are
        currently using kuda bank.
      </p>
      <p>
        Lastly, knowing users might still have some questions about kuda bank, I
        added a FAQ section that answers most of the questions the users might
        have. So they don’t have to reach out to the customer care people to
        answer basic questions they might have.
      </p>
      <p>
        Lastly is the footer section. On the current site, the information on
        the bottom below the links does not look so good in terms of color
        contrast. Grey text does not look that readable on a white background.
        For this reason, I added a purple background which makes for a great
        color contrast with white text placed on it.
      </p>
      <p>
        I have simplified everything on the page for users to easily navigate
        through the page. I believe the reading experience is better than the
        current website.
      </p>
    </section>
    <section id="Visual Style">
      <h2>Visual Style</h2>
      <div class="subSection">
        <h3>Color</h3>
        <vue-img :src="color" alt="" />
      </div>
      <div class="subSection">
        <h3>Font</h3>
        <p>
          Muli
        </p>
      </div>
      <div class="subSection">
        <h3>Tools Used</h3>
        <ul>
          <li>Pen and paper</li>
          <li>figma</li>
        </ul>
      </div>
    </section>
  </article>
</template>
<script>
import vueImg from "@/components/vueImg.vue";

import * as color from "@/assets/UX/kudaBank/color.png";
import * as original from "@/assets/UX/kudaBank/original.png";
import * as redesign from "@/assets/UX/kudaBank/redesign.png";
import * as sketch from "@/assets/UX/kudaBank/sketch.png";
import * as sketch1 from "@/assets/UX/kudaBank/sketch1.png";
import * as sketch2 from "@/assets/UX/kudaBank/sketch2.png";
import * as sketch3 from "@/assets/UX/kudaBank/sketch3.png";
import * as sketch4 from "@/assets/UX/kudaBank/sketch4.png";
import * as sketch5 from "@/assets/UX/kudaBank/sketch5.png";
import * as sketch6 from "@/assets/UX/kudaBank/sketch6.png";
export default {
  name: "KudaBankCaseStudy",
  components: {
    vueImg
  },
  data() {
    return {
      color,
      original,
      redesign,
      sketch,
      sketch1,
      sketch2,
      sketch3,
      sketch4,
      sketch5,
      sketch6
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.kudaBankCaseStudy {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

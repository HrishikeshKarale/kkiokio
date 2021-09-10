// https://abhishekkaushal.com/portfolio-showcase/people-matters-cohort/
//http://jessis.cool/
<template>
  <article class="venmoCaseStudy">
    <header>
      <h1>Venmo Case Study</h1>
    </header>
    <p>
      The fintech sector is a jam-packed market, flooded with tech companies
      vying to simplify an industry known for being a convoluted knot of
      regulations, bureaucratic protocol, and red tape.
    </p>
    <p>
      Creating a quality fintech user experience can be a nightmare for
      designers, so much so that we recently felt the need to lay out specific
      <a
        title="UX Design Guidelines for Fintech Platforms"
        href="https://www.invisionapp.com/blog/ux-design-fintech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        design guidelines
      </a>
      for it.
    </p>
    <vue-img :src="headerImage" alt="" />
    <p>
      Social media is a digital arena that many have entered and few have
      conquered, a force so indelibly influential on humanity that in 3000 years
      historians may very well define our era by it, like the assembly line to
      the Industrial Revolution.
    </p>
    <p>
      It is a tale of two industries in this instalment of UX Case Study, and a
      standout app from either one of these genres would make an excellent
      candidate for our UX dissection. Both present notoriously tricky and
      disparate challenges for user experience designers.
    </p>
    <p>
      So instead of deciding between the two, I decided to cover an app that
      straddles both
    </p>
    <section id="Venmo App">
      <h3>The Venmo App</h3>
      <p>
        You could measure the runaway popularity of Venmo by its enormous user
        base, or by the number of transactions it processes daily, but I think
        the most indicative benchmark of its success is an achievement most
        companies only dream of brand verbification.
      </p>
      <p>
        “Just venmo me”. “I venmoed you the rent.” “I’m venmoing you now.” Venmo
        has ingrained itself into our cultural lexicon, so they are definitely
        doing something right. But is that something UX? To find out, I
        downloaded Venmo in iOS and dove into an app that combines two of the
        most infamous industries in the UX game.
      </p>
    </section>
    <section id="Onboarding">
      <h3>Onboarding</h3>
      <p>
        Upon opening the app, we are greeted with one of the more intriguing
        sign-up screens I have come across. The interactions are conventional –
        there is an emphasised ‘Sign up with Facebook’ and a less encouraged
        ‘sign up with email’, but the majority of the screen is dedicated to
        what appears to be a live global feed of Venmo transactions.
      </p>
      <vue-img :src="onboarding" alt="" />
      <p>
        The actual purpose of this feed is not an uncommon strategy. It is
        mainly demonstrating the app’s value by showing its popular day-to-day
        use cases, but rarely is this done by broadcasting an actual feed. It is
        much more typical to see, say, a background video of someone using the
        app, like Bumble for instance.
      </p>
      <p>
        Personally, I think this is rather cool. Though I have to imagine there
        has to be a sort of intensive screening process performed by some
        algorithm to ensure NSFW content does not flash across the signup
        screen.
      </p>
      <p>
        The fact that users can sign up with Facebook is also significant. Like
        the global feed, it demonstrates Venmo’s desire to position itself as a
        social platform.
      </p>
      <p>
        I do not think fintech apps would do this because they are more
        concerned with conveying the privacy and security of their users’
        financial information, something a Facebook login option may not
        project. I would bet a majority of users would never conduct any
        financial business on Facebook, so I am not going to do it here. I tap
        “sign up with email”.
      </p>
      <vue-img :src="onboarding2" alt="" />
      <p>
        We have got some boilerplate form-filling here, nothing especially
        remarkable. When I go to complete the form, we see Venmo’s fintech side
        start to shine, utilising an overlay that asks us to select a secure
        password, and then following up with two-factor authentication via
        mobile.
      </p>
      <p>
        And unfortunately, our onboarding process ends here. I attempt to enter
        my phone number, and am promptly rejected, with the app informing me
        that my phone number is already associated with another account (my
        personal one). So while a bit premature, I will skip ahead to the meat
        of the application.
      </p>
    </section>
    <section id="Feed">
      <h3>Venmo’s Feed</h3>
      <p>
        Taking cues from social media UX principles, Venmo’s central interface
        employs a feed-centric layout, dedicating nearly all of the screen’s
        real estate to a stream of payments. Analogous to tweets or snaps,
        payments are the standard unit of Venmo’s content.
      </p>
      <vue-img :src="feed" alt="" />
      <p>
        As a user, I can like or comment on Venmo payments, though I cannot view
        the transaction amount unless I am one of the involved parties. Those
        payments are clearly denoted with a dollar amount highlighted in either
        green or red.
      </p>
      <p>
        Venmo has also chosen to declutter their interface by using a singular
        navigation bar, located at the top of the screen. It tidies up the
        interface’s hub, but at a cost that becomes evident when you tap the
        hamburger menu on the top left – it looks like the designers crammed all
        miscellaneous functionalities into it.
      </p>
      <vue-img :src="feed2" alt="" />
      <p>
        For now, let us focus on the three icons centrally located in the
        navbar, ostensibly grouped together by a shared border. These three
        buttons toggle Venmo’s feed: the single silhouette on the far-right
        represents my payments, the centred one are my Facebook friends, and the
        leftmost globe represents, well, everyone else.
      </p>
      <vue-img :src="feed3" alt="" />
      <p>
        The iconography tracks, but to be honest, I do not see any value in
        viewing transactions that total strangers are completing. Venmo thinks
        itself a social platform, and that means forging connections between
        strangers. But the user content it offers is not relevant to me, and I
        do not see why anyone would care about it. (If I am missing something
        here, please let me know in the comments!)
      </p>
      <p>
        In contrast, the ability to filter my feed to display only my payments
        is a great feature. It is especially useful for tracking monthly
        transactions between my roommates and I, such as rent or utilities.
      </p>
      <p>
        Finally, it seems Venmo subscribes to the school of designers that
        believe the cornerstone feature of the application should be in the
        upper-right-hand corner, as that is where they have placed their
        function for completing or requesting payments.
      </p>
    </section>
    <section id="Payments">
      <h3>Payments</h3>
      <p>
        As the foundation of their financial services, it is evident Venmo
        devoted a significant amount of time and effort into the process of
        sending and receiving payments, the starkest indicator being (in my
        opinion) an unconventional order of operations.
      </p>
      <p>
        For starters, I think it is notable Venmo decided to combine both the
        pay and request functions in one feature. To me, this is
        counterintuitive. My first inclination would be to sequester those
        functions as much as possible, to avoid users mistakenly sending money
        they meant to request, or vice versa.
      </p>
      <p>
        But Venmo not only couples those functions together, but they also make
        it the final option to toggle before the transaction. It is a strange
        choice, made stranger still because it works.
      </p>
      <vue-img :src="payments" alt="" />
      <p>
        ransactions start by selecting a user to interact with, which Venmo
        expedites by:
      </p>
      <ul>
        <li>
          Leveraging the default text to inform the user they can find their
          friends in a myriad of ways: name, username, phone or email
        </li>
        <li>
          Offering a “top people” list, based on the users you interface with
          the most
        </li>
        <li>
          A “Turn On Nearby” feature, which harnesses the smartphone’s Bluetooth
          function to identify users based on proximity
        </li>
      </ul>
      <p>
        Together, these features make it effortlessly easy to find the person
        you want to pay, though their prominence on the screen is a bit
        unbalanced. Manually searching only needs a text field, but the ‘top
        people’ function dominates the screen, relegating the “turn on nearby”
        feature to a small link that is easily overlooked (I honestly did not
        notice it until writing this case study).
      </p>
      <vue-img :src="payments2" alt="" />
      <p>
        After selecting a user, Venmo continues to delay the choice between pay
        and request, instead of prompting us to enter a dollar amount and a
        reason for the transaction. Not much to discuss here, though the
        ‘replace with emoji’ feature is a nice touch.
      </p>
      <vue-img :src="payments3" alt="" />
      <p>
        With all required fields completed, we finally get to choose if we are
        paying or requesting our money. Venmo has to strike a tricky balance
        here: this needs to be simple enough so that it does not confuse or
        inconvenience the user, but not so effortless that accidental
        transactions become a common issue.
      </p>
      <p>
        Personally, I think Venmo manages to thread the needle. It requires two
        taps to complete a transaction, and while the “Pay” &amp; “Request”
        buttons are adjacent, the buttons are large enough so that my sausage
        thumbs do not mistakenly hit either.
      </p>
      <p>
        Once you select an option, the other choice disappears – the solitary
        versions of Pay &amp; Request are different colours as well, which helps
        the user validate that they correctly chose their desired option.
      </p>
    </section>
    <section id="Verdict">
      <h3>Final Verdict</h3>
      <p>
        Venmo’s UX team cribs industry-standard techniques from both fintech and
        social media platforms. While some of their features are
        head-scratchers, especially an extremely prominent global feed, the
        application deftly delivers what it promises from the get-go: simple,
        hassle-free payments.
      </p>
      <p>
        I would not say the user experience fits a description of the “fun”
        mobile application Venmo has tried to position itself as. Some of its
        aesthetics are obviously echoing Twitter, but it is certainly more
        engaging than your run-of-the-mill fintech apps.
      </p>
      <p>
        It will be interesting to see how Venmo evolves, especially with Apple
        now integrating Venmo’s fundamental functionality into their iMessages
        in iOS 11. To combat the tech behemoth entering their space, Venmo may
        have to embrace their social media roots further to differentiate, or
        keep improving on their user experience.
      </p>
    </section>
  </article>
</template>
<script>
import vueImg from "@/components/vueImg.vue";

import * as headerImage from "@/assets/UX/venmo/headerImage.jpg";
import * as feed from "@/assets/UX/venmo/feed.jpg";
import * as feed2 from "@/assets/UX/venmo/feed2.jpg";
import * as feed3 from "@/assets/UX/venmo/feed3.jpg";
import * as payments from "@/assets/UX/venmo/payments.jpg";
import * as payments2 from "@/assets/UX/venmo/payments2.jpg";
import * as onboarding from "@/assets/UX/venmo/onboarding.jpg";
import * as onboarding2 from "@/assets/UX/venmo/onboarding2.jpg";
import * as payments3 from "@/assets/UX/venmo/payments3.jpg";

export default {
  name: "VenmoCaseStudy",
  components: {
    vueImg
  },
  data() {
    return {
      headerImage,
      feed,
      feed2,
      feed3,
      payments,
      payments2,
      payments3,
      onboarding,
      onboarding2
    };
  },
  mounted() {
    this.emitter.emit("loadingScreen", false);
  },
  unmounted() {
    this.emitter.emit("loadingScreen", true);
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.venmoCaseStudy {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

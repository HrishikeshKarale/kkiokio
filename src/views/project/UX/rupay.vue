<template>
  <article class="rupay">
    <h2>Rupay UI/UX</h2>
    <section id="About">
      <h3>About the project</h3>
      <p>
        <strong>Overview:</strong>
        A growing Nigerian Bank wants to expand on their buisness and is in need
        of a mobile applicatin so they can offer services. Most customer
        registered with them has a maximum of 2 accounts. Among other things,
        the app needs the ability to top up their accounts, make payments using
        their mobile app, be able to request for refunds and apply for loan.
      </p>
      <p>
        <strong>Objective:</strong>
        To Create a Finech mobile appliation that keeping in mind the following
        functionality
      </p>
      <ol>
        <li>Switch between his accounts</li>
        <li>See recent transactions sorted by recent Date</li>
        <li>See his Wallet Balance</li>
        <li>Know how to fund/top up his account</li>
        <li>Apply for loan</li>
        <li>Pay bills</li>
        <li>
          Allow user to request for a refund (this feature should not be too
          obvious but visible)
        </li>
        <li>Option to Save Card</li>
        <li>Link to refer a friend</li>
      </ol>
      <p>
        <strong>Skills:</strong>
        Fintech UX
      </p>
      <p>
        <strong>Role:</strong>
        UI Designer
      </p>
      <p>
        <strong>Duration:</strong>
        2 Days
      </p>
    </section>
    <section id="Research">
      <h3>Research</h3>
      <p>
        I started out solving this task by conducting a research on apps that
        offer a service similar to this to give me a general idea and serve as a
        form of inspiration. I decided to use the color blue as the primary
        color because blue represents trust. For an app that deals with money,
        the most important thing for users is security, they need to know they
        can put their money into the app and it will be secure. I laid out the
        structure based on the features in the brief on paper and decided on how
        the features will connect.
      </p>
      <p>
        Researching on apps that offer a similar service, I was able to conclude
        that users are able to topup their wallets by using their debit cards
        which have been saved on the app or adding a new card and by bank
        transfer
      </p>
    </section>
    <section id="App Screens">
      <h3>App Screens</h3>
      <p>
        I put the most important features of the app directly on the homescreen
        so the users don’t have to go through multiple screens to do different
        things. Most of what they need is right there at a glance once they open
        the app. Also, they are able to see their most recent transactions. The
        space for the google ad was also added directly on the homescreen so as
        to be able to reach the users as they open the app rather than put it on
        a separate screen which they might not interact with.
      </p>
      <vue-img :src="homeScreen" alt="" />
      <p>
        Here the users can see both accounts(Naira and Dollar) and their
        respective amounts. The plus icon on each account lets the users know
        they can add(topup) more money to the respective accounts.
      </p>
      <p>
        The next set of screens are the Top up, Pay bills and apply for loan
        screens
      </p>
      <vue-img :src="addCard" alt="" />
      <vue-img :src="walletTopUp" alt="" />
      <p>
        They are a number of bills (utility, subscribtions etc.) that could be
        directly paid using a mobile application, so I put them on a seperate
        screen called Bill Pay. I broke them down into their different
        categories to make it easier for the users to pay bills rather than
        scrolling through ten's of options.
      </p>
      <vue-img :src="billPayLoan" alt="" />
      <p>
        Then the loan request page, the users are asked for the amount they want
        and the duration. Based on the process it takes to give a user a loan, I
        added a note to the users to let them know the loan process will take up
        to 6 hours as the information they will be asked to provide will have to
        be verified so they don’t get frustrated. It’s always good practice to
        let different processes take and why.
      </p>
      <p>
        Since we were asked to add a feature that enables the users to request
        for a refund but not to make it too obvious, I decided to add it to the
        Profile settings page in the “Help & Support screen”. Also included in
        the Profile settings page is a tab named “Refer and Earn” which enables
        the users to share a link to friends and family to sign up on the app
        and also earn a small token on each successful sign up as an incentive
        to the users.
      </p>
      <vue-img :src="profile" alt="" />
    </section>
    <section id="Conclusion">
      <h3>Conclusion</h3>
      <p>
        I would not say the user experience fits a description of the “fun”
        mobile application Rupay has tried to position itself as. Some of its
        aesthetics are obviously echoing its competitors, but it is certainly
        more engaging than your run-of-the-mill fintech apps.
      </p>
      <p>
        It will be interesting to see how Rupay evolves, especially with major
        institutions now integrating Rupay’s fundamental functionality into
        their platforms. To combat the tech behemoth entering their space, Rupay
        may have to embrace their social media roots further to differentiate,
        or keep improving on their user experience.
      </p>
    </section>
  </article>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
import * as homeScreen from "@/assets/UX/rupay/homeScreen.png";
import * as profile from "@/assets/UX/rupay/profile.png";
import * as addCard from "@/assets/UX/rupay/addCard.png";
import * as billPayLoan from "@/assets/UX/rupay/billPayLoan.png";
import * as walletTopUp from "@/assets/UX/rupay/walletTopUp.png";
export default {
  name: "Rupay",
  components: {
    vueImg
  },
  data() {
    return {
      homeScreen,
      addCard,
      billPayLoan,
      walletTopUp,
      profile
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.rupay {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

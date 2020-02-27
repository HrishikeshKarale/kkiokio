<template>
  <div class="design">
    <div>
      <h2>Mobile</h2>
      <div>
        <router-link :to="'/Design/GoGreen'">
          <showcase
            title="Go Green App"
            subtitle="Onboarding Screen for the Go Green App."
          >
            <p slot="tech">
              GoGreen is online IOS app, where user can select from a list of
              flora, customize planters according to their needs and place order
              easily.
            </p>
          </showcase>
        </router-link>

        <router-link :to="'/Design/Culinarian'">
          <showcase title="Culinarian" subtitle="Food Recipie App">
            <p slot="tech">
              The Cullinarian App is an mobile aimed targetted
              towardsindividuals who like to cook.
              <br />
              The app walks users towards cooking home made cusines and thus
              promoting a healthy lifestyle.
            </p>
          </showcase>
        </router-link>

        <router-link :to="'/Design/MedCo'">
          <showcase title="MedCo" subtitle="UI Walkthrough and style guide.">
            <p slot="tech">
              The Go Green App is an mobile aimed towards the medical industry.
              <br />
              Users can look up details of services offered by various hospitals
              and the cost associated with those services.
            </p>
          </showcase>
        </router-link>

        <router-link :to="'/Design/FitnessFriend'">
          <showcase title="Fitness Friend" subtitle="Concept idea, Styleguide">
            <p slot="tech">
              A Fitness tracker app for smart watch.
              <br />
              It helps its users keep track of their daily activity and vitals.
            </p>
          </showcase>
        </router-link>

        <router-link :to="'/Design/SignUpApp'">
          <showcase title="App Login/SignUp" subtitle="Login, SignUp Screens">
            <p slot="tech">
              Login/SignUp screen for a mobile app.
            </p>
          </showcase>
        </router-link>
      </div>
    </div>
    <div>
      <div>
        <h2>Web Apps</h2>
      </div>
      <div>
        <router-link :to="'/Design/RSVPApp'">
          <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
            <p slot="tech">
              The pack station is designed to allow users to pack and ship
              orders.
              <br />
              Simple Pack supports orders with original packaging and default
              box items.
            </p>
          </showcase>
        </router-link>
        <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
          <p slot="tech">
            The pack station is designed to allow users to pack and ship orders.
            <br />
            Simple Pack supports orders with original packaging and default box
            items.
          </p>
        </showcase>
        <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
          <p slot="tech">
            The pack station is designed to allow users to pack and ship orders.
            <br />
            Simple Pack supports orders with original packaging and default box
            items.
          </p>
        </showcase>
        <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
          <p slot="tech">
            The pack station is designed to allow users to pack and ship orders.
            <br />
            Simple Pack supports orders with original packaging and default box
            items.
          </p>
        </showcase>
        <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
          <p slot="tech">
            The pack station is designed to allow users to pack and ship orders.
            <br />
            Simple Pack supports orders with original packaging and default box
            items.
          </p>
        </showcase>
        <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
          <p slot="tech">
            The pack station is designed to allow users to pack and ship orders.
            <br />
            Simple Pack supports orders with original packaging and default box
            items.
          </p>
        </showcase>
        <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
          <p slot="tech">
            The pack station is designed to allow users to pack and ship orders.
            <br />
            Simple Pack supports orders with original packaging and default box
            items.
          </p>
        </showcase>
        <showcase title="Simple Pack" subtitle="Fulfillment Pack Station">
          <p slot="tech">
            The pack station is designed to allow users to pack and ship orders.
            <br />
            Simple Pack supports orders with original packaging and default box
            items.
          </p>
        </showcase>
      </div>
    </div>
  </div>
</template>

<script>
import showcase from "@/components/showcase.vue";
export default {
  components: {
    showcase
  }
};
</script>

<style lang="less" scoped>
.design {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 480px;
  & > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>

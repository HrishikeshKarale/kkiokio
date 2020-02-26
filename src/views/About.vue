<template>
  <div class="about">
    <article>
      <h1>About Me</h1>
      <div>
        <h3>Hrishikesh Karale</h3>
        <h3>UX Professional</h3>
        <h4>Full Stack Designer</h4>
        <h4>Born 14th Feb, 1990</h4>
      </div>
      <div class="bio">
        <div>
          <img alt="profile Picture" src="../../public/img/profilePic.jpg" />
        </div>
        <div>
          <p>
            I'm a UX Professional with 3+ years of experience working on several
            major software projects in healthcare, eCommerce and enterprise
            systems. My primary objectives are to design interfaces that can
            solve problems and create experiences that initiate a sense of
            delight and wonder for my users.
          </p>
          <p>
            Having both a Design and Development background allows me to balance
            both the needs of the end-user as well as the business goals of the
            company. As a UX designer, I strive to use a constant end-user
            feedback loop to define and redefine my project objectives. The
            user's needs guide the strategic decisions I make during my UX
            process. This non-linear approach is integral to ensuring that my
            design decisions lead to a massive improvement in the key metrics
            that are relevant to the user experience. I also strictly make sure
            that my design decisions can be implemented in the final product
            without compromising the project timeline. In short, I like to think
            like an engineer, data-scientist and marketer in addition to being a
            UX designer.
          </p>
          <p>
            I’m also a novice visual designer. I’ve designed over 30 working
            prototypes in online-shopping, warehouse-management,
            inventory-management, fulfillment and healthcare using a multitude
            of prototyping tools including products from Adobe Creative Cloud,
            Sketch and Figma. My prototyping strategy primarily focuses on
            functionality and usability.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="less" scoped>
.about {
  & > article {
    display: flex;
    flex-direction: column;
    margin-top: 8vh;
    & > div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      &:not(.bio) > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      &.bio {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        & > div {
          margin: 8vh 0 8vh 0;
          & > img {
            max-height: 60vh;
            min-height: 320px;
          }
          & > p {
            max-width: 40vw;
            min-width: 480px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>

//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <footer class="vueFooter">
    <div class="social">
      <a href="https://github.com/HrishikeshKarale">
        <span class="fab fa-github fa-2x" />
        <!-- <b>
          @hrishikesh-karale
        </b> -->
      </a>
      <a href="https://www.npmjs.com/~kkiokio">
        <span class="fab fa-npm fa-2x" />
        <!-- <b>
          @kkiokio
        </b> -->
      </a>
      <a href="https://www.linkedin.com/in/hrishikesh-karale/">
        <span class="fab fa-linkedin-in fa-2x" />
        <!-- <b>
          @hrishikesh-karale
        </b> -->
      </a>
    </div>
    <div class="copyright">
      <span class="fas fa-copyright" />
      <b>2020 Hrishikesh Karale</b>
      <router-link to="/termsOfService">
        Terms Of Service
      </router-link>
      <router-link to="/privacyPolicy">
        Privacy Policy
      </router-link>
    </div>
    <div class="disclaimer">
      * The views expressed on this website are entirely mine and not that of my
      employers.
    </div>
  </footer>
</template>

<script>
export default {
  name: "VueFooter"
}; //default
</script>

//
<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

footer {
  margin-top: 4 * @spaceXl;
  &.vueFooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: @spaceMd @spaceXl;
    background-color: @navBackground;
    font-size: @fontSizeSm;
    color: @offWhite;
    max-width: 100vw;
    z-index: @headerZ;
    min-height: @footer;
    padding: @spaceXl;
    position: relative;
    & > div {
      display: flex;
      align-items: center;
      &.copyright {
        position: absolute;
        bottom: @spaceXl;
        left: @spaceXl;
        & > span {
          margin-right: @spaceLg;
        }
        & > a {
          margin: 0 @spaceMd;
        }
      }
      &.social {
        position: absolute;
        top: @spaceXl;
        right: @spaceXl;
        justify-content: space-between;
        width: 240px;
        & > a {
          & > span {
            margin-right: @spaceMd;
            & + b {
              letter-spacing: 2px !important;
            }
          }
        }
      }
    }
    // .boxShadow(@one);
    @media screen {
      @media (max-width: @maxWidth) {
        flex-direction: row;
      }
    }
  }
}
</style>

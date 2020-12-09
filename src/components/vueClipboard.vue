<template>
  <div class="copyClipboard">
    <vue-button
      :button-type="dButtonType"
      button-name="togglecode"
      :button-text="buttonText"
      :button-icon="buttonIcon"
      :button-style="buttonStyle"
      :disabled="!dBooleanTrue"
      :autofocus="!dBooleanTrue"
      :on-click-action="copyToClipboard"
    />
    <!-- <input type= 'hidden' :id= "id" :value= 'componentCode'> -->
    <textarea :id="id" :value="componentCode"></textarea>
  </div>
</template>
<script>
import vueButton from "@/components/vueButton.vue";

export default {
  name: "VueClipboard", //props

  components: {
    vueButton
  }, //data

  props: {
    buttonText: {
      required: false,
      type: [String, null],
      default: null
    },

    buttonName: {
      required: false,
      type: [String, null],
      default: "copyToClipboard"
    },

    buttonIcon: {
      required: false,
      type: [String, null],
      default: "fas fa-copy"
    },

    buttonStyle: {
      required: false,
      type: [String, null],
      default: "small"
    },

    //content to be copied
    componentCode: {
      type: String,
      required: true
    },

    id: {
      required: true,
      type: String
    }
  },

  data() {
    const dButtonType = "button";

    const dButtonStyle = this.$store.state.buttonStyle;

    const dBooleanTrue = true;

    const dForm = "";

    const onClickAction = this.consoleClick;

    return {
      dButtonType,

      dButtonStyle,

      dBooleanTrue,

      dForm,

      onClickAction
    }; //return
  }, //components

  methods: {
    copyToClipboard: function() {
      const tempId = "#" + this.id;
      const codeToCopy = document.querySelector(tempId);
      codeToCopy.style.display = "block";
      codeToCopy.select();

      try {
        const successful = document.execCommand("copy");
        // document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        alert("code copied!", msg);
        // console.log('copy successfull', tempId)
        // alert("copied: ", successful)
      } catch (err) {
        alert("Oops, unable to copy");
      }

      document.querySelector(tempId).style.display = "none";
      window.getSelection().removeAllRanges();
    } //copyToClipboard
  } //methods
}; //default
</script>

<style lang="less" scoped>
.copyClipboard {
  display: flex;

  textarea {
    display: none;
  }
}
</style>

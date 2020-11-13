export const validator = {
  data() {
    return {
      //something
    };
  },

  methods: {
    initializeValidator: function(pattern) {
      this.pattern = pattern;
      // console.log(pattern);
    }, //initializeValidator
    // validator: function() {
    //   //initialize warning and error messages to null to accomodate change in alert messages
    //   this.dDanger = null;
    //   this.dWarning = null;
    //   //loads current value stored from data variables into temp variable val for readability of code
    //   const val = this.dTextValue;
    //   const maxlength = this.maxLength;
    //   const minlength = this.minLength;
    //   let pattern = null;

    //   if (this.pattern.constructor != RegExp) {
    //     pattern = new RegExp(this.pattern);
    //   } else {
    //     pattern = this.pattern;
    //   }

    //   //if value for val(temp) exists check for warning triggers
    //   if (val) {
    //     //if a patters for acceptable value exists, then trigger warning and set warning message if val (temp) does not follow the patter
    //     if (pattern && !val.match(pattern)) {
    //       this.dWarning = "Wrong format: Please follow the pattern " + pattern;
    //     } else if (minlength) {
    //       this.dWarning = this.isTooShort(minlength, val);
    //     } else if (maxlength) {
    //       this.dWarning = this.isTooLong(maxlength, val);
    //     } else {
    //       //emit/send new values to parent component v-model attribute
    //       this.$emit("input", val);
    //     }
    //   }
    //   //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
    //   else {
    //     this.dDanger = this.isRequired();
    //   }
    // }, //validator

    //value ebsent
    isRequired: function() {
      if (this.required) {
        return "Required field.";
      }
      return null;
    }, //isRequired

    //value present
    isTooShort: function(minLength, value) {
      if (minLength > value.length) {
        return (
          "Invalid Input: Allowed minlength for input is " +
          minLength +
          " characters."
        );
      }
      return null;
    }, //isTooShort
    isTooLong: function(maxLength, value) {
      if (maxLength < value.length) {
        return (
          "Invalid Input: Allowed maxlength for input exceeded by -" +
          this.lengthDelta +
          " characters."
        );
      }
      return null;
    }, //isTooLong

    //pattern matching
    followsPattern: function(value, pattern) {
      if (!pattern.test(value)) {
        return "Wrong email format: Please follow the pattern " + pattern;
      }
    }, //followsPattern
    // isPhoneValid: function(phone, pattern) {
    //   if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/.test(phone)) {
    //     return (
    //       "Wrong phone number format: Please follow the pattern " + pattern
    //     );
    //   }
    // }, //isPhoneValid
    // isTextValid: function(text, pattern) {
    //   if (!/([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*/.test(text)) {
    //     return (
    //       "Wrong phone number format: Please follow the pattern " + pattern
    //     );
    //   }
    // }, //isTextValid

    patternCheck(value) {
      let pattern = null;
      if (this.pattern.constructor != RegExp) {
        pattern = new RegExp(this.pattern);
      } else {
        pattern = this.pattern;
      }
      if (pattern && !value.match(pattern)) {
        this.dWarning = "Wrong format: Please follow the pattern " + pattern;
      }

      // console.log(pattern.test(value));
    } //patternMatch
  },

  mounted() {
    //something
  }
};

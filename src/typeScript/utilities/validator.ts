export default function validator(props, emit, dValue) {
  //value ebsent
  const isRequired = function() {
    if (props.required) {
      let msg = "";
      if (!dValue.value) {
        msg = "Required field.";
      }
      emit("notify", "error", msg);
      return msg;
    }
    return false;
  }; //isRequired

  //value present
  const isStrict = () => {
    if (props.strict) {
      let msg = "";
      if (
        props.options?.length &&
        dValue?.value &&
        props.options.indexOf(dValue.value) == -1
      ) {
        msg =
          "Invalid Input. Please select an option from the options below.\n The value " +
          dValue.value +
          " is not a valid option.";
      }
      emit("notify", "warning", msg);
      return msg;
    }
    return false;
  }; //isStrict

  //value present
  const isTooShort = function() {
    if (props.minlength) {
      let msg = "";
      if (props.minlength > dValue.value.length) {
        msg =
          "Invalid Input: Allowed minlength for input is " +
          props.minlength +
          " characters.";
      }
      emit("notify", "warning", msg);
      return msg;
    }
    return false;
  }; //isTooShort

  const isTooLong = () => {
    if (props.maxlength) {
      let msg = "";
      if (props.maxlength < dValue.value.length) {
        msg =
          "Invalid Input: Allowed maxlength for input exceeded by " +
          (props.maxlength.length - dValue.value.length) +
          " characters.";
      }
      emit("notify", "warning", msg);
      return msg;
    }
    return false;
  }; //isTooLong

  //pattern matching
  const followsPattern = () => {
    if (props.pattern) {
      let msg = "";
      if (!props.pattern.test(dValue.value)) {
        msg = "Wrong email format: Please follow the pattern " + props.pattern;
      }
      emit("notify", "warning", msg);
      return msg;
    }
    return false;
  }; //followsPattern

  const validate = function() {
    //if value for val(temp) exists check for warning triggers
    if (dValue.value) {
      //if any of the check fails then an error message is emited as notify and
      if (isTooShort()) {
        //automatically notifies the parent component/host about the error
      } else if (isTooLong()) {
        //automatically notifies the parent component/host about the error
      } else {
        //emit/send new values to parent component v-model attribute
        emit("notify", "error", "");
        emit("value", dValue.value);
      }
    }
    //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
    else if (isRequired()) {
      emit("value", "");
    }
  }; //validator
  return { validate, followsPattern, isStrict, isRequired };
}

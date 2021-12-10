// vue
import { reactive } from "vue";
// type definitions
import SourceType from "@/typeScript/definition/notify/SourceType";
import AlertObjectType from "@/typeScript/definition/notify/AlertObjectType";

export default function notify(alertID: SourceType[] = [{parent: null, child: null }]) {
  let alertObject: AlertObjectType[] = reactive([{
    src: {
      parent: null,
      child: null
    },
    error: "",
    warning: "",
    info: "",
    success: ""
  }]);

  const alert = (type: string, message: string, alertID: SourceType = { parent: null, child: null }): void => {
    let isFound = false;
    for (let index = 0; index < alertObject.length; index++) {
      const element: AlertObjectType = alertObject[index];
      if (alertID.parent === element.src.parent && alertID.child === element.src.child) {
        // console.log("ALERT: ", element, alertID);
        switch (type) {
          case "error":
            element.error = message;
            break;
          case "warning":
            element.warning = message;
            break;
          case "success":
            element.success = message;
            break;
          default:
            element.info = message;
            break;
        }
        isFound = true;
      }
    }
    if (!isFound) {
      alertObject.push({
          src: alertID,
          error: type==="error"? message : "",
          warning:  type==="warning"? message : "",
          info:  type==="info"? message : "",
          success:  type==="success"? message : ""
        })
    }
  };

  return {
    alertObject,
    alert
  };
}

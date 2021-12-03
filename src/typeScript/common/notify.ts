import { reactive } from "vue";

interface SourceType {
  parent: null | String,
  child: null | String
};

interface alertObjectType {
  src: SourceType,
  error: String,
  warning: String,
  info: String,
  success: String
}

export default function notify() {
  const alertObject: alertObjectType[] = reactive([{
    src: {
      parent: null,
      child: null
    },
    error: "",
    warning: "",
    info: "",
    success: ""
  }]);

  const alertMsg = (source: SourceType = {parent: null, child: null }): alertObjectType|void => {
    for (let index = 0; index < alertObject.length; index++) {
      const element = alertObject[index];
      if (source.parent === element.src.parent && source.child === element.src.child) {
        return element;
      }
    }
  };

  const alert = (type: string, message: string, source: SourceType = {parent: null, child: null }): void => {
    for (let index = 0; index < alertObject.length; index++) {
      const element = alertObject[index];
      if (source.parent === element.src.parent && source.child === element.src.child) {
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
      }
    }
  };

  return {
    alertMsg,
    alert
  };
}

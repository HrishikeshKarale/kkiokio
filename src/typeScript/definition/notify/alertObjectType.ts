import SourceType from "@/typeScript/definition/notify/SourceType";

export default interface AlertObjectType {
  src: SourceType,
  error: String,
  warning: String,
  info: String,
  success: String
}
import type { App } from "vue";
import ZMInput from "./Input.vue";

ZMInput.install = function (app: App) {
  app.component(ZMInput.name, ZMInput);
};

export { ZMInput };
export default ZMInput;

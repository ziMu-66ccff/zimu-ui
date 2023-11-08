import type { App } from "vue";
import ZMButton from "./Button.vue";

ZMButton.install = function (app: App) {
  app.component(ZMButton.name, ZMButton);
};

export { ZMButton };
export default ZMButton;

import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faEyeSlash,
  faGift,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEye, faEyeSlash, faGift, faEdit);

import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-button", BaseButton);

app.mount("#app");

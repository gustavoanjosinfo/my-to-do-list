import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.teal.darken4,
      },
      light: {
        primary: colors.teal.lighten4,
      },
    },
  },
});

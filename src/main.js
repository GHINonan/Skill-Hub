import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Vuetify imports
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Local imports
import App from './App.vue';
import router from './router';

// Vuetify setup
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Default value for display purposes
  },
  components,
  directives,
});

// Create the Vue app
const app = createApp(App);

// Use plugins
app.use(createPinia());
app.use(router);
app.use(vuetify);

// Add router navigation guards
router.beforeEach((to, from, next) => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.remove('hidden', 'fade-out');
  }
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('fade-out');
      loader.addEventListener('animationend', () => {
        loader.classList.add('hidden');
      });
    }
  }, 5000); // Adjust delay if necessary
});

// Mount the app
app.mount('#app');

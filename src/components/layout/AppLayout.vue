<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar
        app
        class="px-3"
        color="blue-darken-4"
        elevate-on-scroll
        sticky
        style="z-index: 20"
      >
        <v-toolbar-title>
          <div class="d-flex align-center">
            <v-icon size="24" color="white">mdi-alpha-s-box-outline</v-icon>
            <span
              class="font-weight-bold"
              style="
                color: white;
                margin-left: 8px;
                font-size: 0.9rem;
                white-space: normal;
                overflow: visible;
              "
            >
              Skill Hub
            </span>
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text=""
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main style="margin-top: -70px">
        <slot name="content"></slot>
      </v-main>

      <v-footer class="font-weight-bold" color="blue-darken-4" elevation="24" border app
        >2024 - Skill Hub</v-footer
      >
    </v-app>
  </v-responsive>
</template>

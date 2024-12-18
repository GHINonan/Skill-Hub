<script setup>
import { ref, onMounted } from "vue";
import AppLayout from "@/components/layout/AppLayout.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
const isWelcomeModalVisible = ref(false);
// Lifecycle Hook: Mounted
onMounted(() => {
  isWelcomeModalVisible.value = true;
});
</script>

<template>
  <!-- Enhanced Welcome Modal -->
  <v-dialog v-model="isWelcomeModalVisible" max-width="900">
    <v-card>
      <!-- Header Section with Icon and Title -->
      <v-card-text class="headline d-flex align-center justify-center">
        <v-icon color="blue-darken-2" size="48" class="mr-3"
          >mdi-alpha-s-box-outline</v-icon
        >
        <h3>Welcome to Skill Hub, a Simplified Skill Sharing Platform!</h3>
      </v-card-text>

      <!-- Main Content Section -->
      <v-card-text>
        <!-- About Section -->
        <section class="mb-6">
          <h2 class="text-h5">About Skill Hub</h2>
          <p>
            Skill Hub is your space to showcase and discover unique skills. Whether you're
            looking to advertise your talents or explore what others can offer, we've
            simplified the process to make it easy and accessible for everyone.
          </p>
          <p>
            Our mission is to connect individuals with personal and professional
            opportunities by focusing on one thing: skills. No clutter, no
            complications—just a platform where your abilities shine.
          </p>
        </section>

        <!-- Highlights Section -->
        <section class="mb-6">
          <h2 class="text-h5">Why Choose Skill Hub?</h2>
          <div class="ml-5">
            <ul>
              <li>🌟 Easily browse a variety of skills from a diverse user base.</li>
              <li>🌟 Advertise your skills for personal or commercial opportunities.</li>
              <li>🌟 Connect with others for collaboration, learning, or hiring.</li>
              <li>🌟 A simple and user-friendly platform focused on talent discovery.</li>
            </ul>
          </div>
        </section>

        <!-- Testimonials Section -->
        <section class="mb-6">
          <h2 class="text-h5">What Our Users Say</h2>
          <blockquote class="mb-4">
            "Skill Hub made it easy for me to find a graphic designer for my project. The
            simplicity of the platform is fantastic!" – <em>Alex T.</em>
          </blockquote>
          <blockquote>
            "As a freelance writer, I've gained great exposure and new clients through
            Skill Hub. It's exactly what I needed!" – <em>Maria S.</em>
          </blockquote>
          <blockquote>
            "I love the focus on skills. It cuts out all the noise and connects you with
            exactly what you're looking for." – <em>John D.</em>
          </blockquote>
        </section>

        <!-- Developers Section -->
        <section class="mb-6 text-center">
          <h2 class="text-h5">Meet the Developers</h2>
          <p>Skill Hub is proudly developed by:</p>
          <ul class="text-subtitle-1" style="list-style-type: none; padding: 0">
            <li>👨‍💻 Gian Hedrick Ian T. Nonan</li>
            <li>👨‍💻 Christian B. Abamo</li>
            <li>👨‍💻 Arnulfo L. Ale Jr.</li>
          </ul>
        </section>

        <!-- Call to Action -->
        <section class="text-center">
          <p class="text-subtitle-1 mb-3">
            Ready to explore new skills or showcase your own?
          </p>
          <v-btn color="blue-darken-2" large text @click="isWelcomeModalVisible = false">
            Start Exploring Skills
          </v-btn>
        </section>
      </v-card-text>
    </v-card>
  </v-dialog>
  <AppLayout>
    <template #content>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6" class="mx-auto pt-16">
            <v-card class="mx-auto" elavation="24">
              <v-card-text class="text-center">
                <v-img
                  class="mx-auto rounded-circle"
                  src="/images/logo.png"
                  width="25%"
                ></v-img>
                <h1 class="font-weight-black">Skill Hub</h1>
                <p class="font-weight-bold">Login Form</p>
              </v-card-text>

              <v-card-text class="bg-surface-light pt-4">
                <v-divider class="my-5"></v-divider>

                <LoginForm></LoginForm>

                <v-divider class="my-5"></v-divider>

                <h5 class="text-center">
                  Don't have to account?
                  <RouterLink to="/register">Click here to Register</RouterLink>
                </h5>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>

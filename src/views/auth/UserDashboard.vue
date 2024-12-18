<template>
  <v-app>
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
              Skill Hub is your space to showcase and discover unique skills. Whether
              you're looking to advertise your talents or explore what others can offer,
              we've simplified the process to make it easy and accessible for everyone.
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
                <li>
                  🌟 Advertise your skills for personal or commercial opportunities.
                </li>
                <li>🌟 Connect with others for collaboration, learning, or hiring.</li>
                <li>
                  🌟 A simple and user-friendly platform focused on talent discovery.
                </li>
              </ul>
            </div>
          </section>

          <!-- Testimonials Section -->
          <section class="mb-6">
            <h2 class="text-h5">What Our Users Say</h2>
            <blockquote class="mb-4">
              "Skill Hub made it easy for me to find a graphic designer for my project.
              The simplicity of the platform is fantastic!" – <em>Alex T.</em>
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
            <v-btn
              color="blue-darken-2"
              large
              text
              @click="isWelcomeModalVisible = false"
            >
              Start Exploring Skills
            </v-btn>
          </section>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Navbar -->
    <v-app-bar app color="primary" elevate-on-scroll sticky style="z-index: 20">
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
    </v-app-bar>

    <!-- Page Content -->
    <v-main>
      <v-container fluid>
        <v-row class="responsive-height">
          <!-- Left: Profile Section -->
          <v-col cols="12" md="4" class="profile-section">
            <div class="profile-sidebar">
              <!-- User Avatar -->
              <div class="profile-avatar text-center">
                <v-avatar size="128" color="white">
                  <v-icon size="128">mdi-account</v-icon>
                </v-avatar>
              </div>

              <!-- User Info -->
              <div class="profile-info mt-4">
                <!-- Name Section -->
                <v-row align="center" dense>
                  <v-col>
                    <h4 class="m-0">
                      <b>Name:</b>
                      {{ user.fullname || `${user.first_name} ${user.last_name}` }}
                    </h4>
                  </v-col>
                </v-row>
                <!-- Email Section -->
                <v-row align="center" dense>
                  <v-col>
                    <p class="text-subtitle-1 m-0"><b>Email:</b> {{ user.email }}</p>
                  </v-col>
                </v-row>
                <!-- Facebook Link -->
                <v-row align="center" dense>
                  <v-col>
                    <p class="text-subtitle-1 m-0">
                      <b>Facebook:</b> {{ user.facebook_acc || "N/A" }}
                    </p>
                  </v-col>
                </v-row>
                <!-- Phone Number Section -->
                <v-row align="center" dense>
                  <v-col>
                    <p class="text-subtitle-1 m-0">
                      <b>Phone:</b> {{ user.phone_number || "N/A" }}
                    </p>
                  </v-col>
                </v-row>

                
                <!-- Logout -->
                <div class="lg:mt-4">
                  <v-btn block color="error" dark @click="logout"> Logout </v-btn>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Right: Skills Section -->
          <v-col cols="12" md="8" class="skills-section">
            <v-card-title
              ><b><h3>User's Skills</h3></b></v-card-title
            >
            <hr />

            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase";
import { useRouter } from "vue-router";

const router = useRouter();
// Reactive State
const drawer = ref(false);
const isEditModalOpen = ref(false);
const isModalOpen = ref(false);
const isFormValid = ref(false);
const isWelcomeModalVisible = ref(false);


const user = ref({
  fullname: "",
  phone: "",
  email: "",
  facebook_acc: "",
  first_name: "",
  last_name: "",
  user_description: "",
  rate: "",
});

const dialog = ref({
  visible: false,
  field: "",
  value: "",
  userId: null,
});
const rules = {
  required: (value) => !!value || "This field is required.",
};

// Lifecycle Hook: Mounted
onMounted(() => {
  fetchUserDetails();
  isWelcomeModalVisible.value = true;
});

// Methods
const fetchUserDetails = async () => {
  try {
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !authUser) throw new Error("User not authenticated.");

    const { data, error } = await supabase
      .from("users_info")
      .select(
        "id, first_name, last_name, email, phone_number, facebook_acc, user_description, rate"
      )
      .eq("auth_users_id", authUser.id)
      .single();

    if (error) throw error;

    user.value = {
      fullname: `${data.first_name} ${data.last_name}`,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number || "N/A",
      facebook_acc: data.facebook_acc || "N/A",
      user_description: data.user_description || "",
      rate: data.rate || "",
    };
  } catch (err) {
    console.error("Error fetching user details:", err.message);
  }
};
const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    router.push("/");
    console.log("Logged out successfully.");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};
</script>

<style scoped>
.profile-avatar {
  margin-bottom: 20px;
}
.profile-info p,
.profile-info h4 {
  margin: 0;
}
.profile-section {
  background-color: #f4f4f4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.profile-sidebar {
  width: 100%;
}

.profile-avatar {
  margin-bottom: 16px;
}

.logout-button {
  margin-top: 16px;
  width: 100%;
}
/* For modern browsers (hide scrollbar visually) */
.v-application::-webkit-scrollbar {
  display: none; /* Hide scrollbar for WebKit browsers */
}

.v-application {
  -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

.skills-section {
  height: 100%; /* Ensure it takes full column height */
}

.skills-container {
  height: calc(100% - 32px); /* Adjust for padding if necessary */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 16px; /* Add padding for aesthetics */
  background-color: #fff; /* Optional: Set background for clarity */
  border-radius: 8px; /* Optional: Rounded edges */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow */
}

/* Hide scrollbar (optional) */
.skills-container::-webkit-scrollbar {
  display: none;
}

.skills-container {
  -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}
.responsive-height {
  height: 90vh;
}

@media (max-width: 600px) {
  /* Adjust breakpoint as needed */
  .responsive-height {
    height: 60vh;
  }
  .profile-sidebar {
    padding-top: 0px;
  }
  .text-small {
    font-size: 0.8rem;
  }
  .profile-section {
    height: 100%;
    margin-bottom: 75px;
  }
}
</style>

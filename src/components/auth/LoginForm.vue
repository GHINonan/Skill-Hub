<script setup>
import { requiredValidator, emailValidator } from "@/utils/validators";
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase";
import { useRouter } from "vue-router";

const router = useRouter();
const refVForm = ref();
const isPasswordVisible = ref(false);
const isWelcomeModalVisible = ref(false);
const errorMessage = ref("");

const formDataDefault = {
  email: "",
  password: "",
};

const formData = ref({
  ...formDataDefault,
});

const login = async () => {
  try {
    errorMessage.value = ""; // Clear previous error messages

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.value.email,
      password: formData.value.password,
    });

    if (error) {
      throw error;
    }

    // Redirect to a specific page upon successful login
    router.push("/dashboard");
  } catch (err) {
    errorMessage.value = err.message;
  }
};

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) login();
  });
};

// Automatically show the welcome modal when the page loads
onMounted(() => {
  isWelcomeModalVisible.value = true;
});
</script>

<template>
  <v-form ref="refVForm" @submit.prevent="onFormSubmit">
    <v-text-field
      v-model="formData.email"
      label="Email"
      prepend-inner-icon="mdi-email-outline"
      :rules="[requiredValidator, emailValidator]"
    ></v-text-field>

    <v-text-field
      v-model="formData.password"
      prepend-inner-icon="mdi-lock-outline"
      label="Password"
      :type="isPasswordVisible ? 'text' : 'password'"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      :rules="[requiredValidator]"
    ></v-text-field>

    <v-btn class="mt-2" type="submit" block color="primary" prepend-icon="mdi-login">
      Login
    </v-btn>
  </v-form>
</template>

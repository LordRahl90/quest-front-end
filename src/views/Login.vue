<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                  v-model=user.email
                  label="Login" name="email"
                  prepend-icon="person" type="text" />

                  <v-text-field
                    v-model=user.password
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="authenticate" >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      message: 'hello',
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    authenticate() {
      const { email, password } = this.user;
      console.log(`${email} ${password}`);
    },
  },
  components: {},
};
</script>

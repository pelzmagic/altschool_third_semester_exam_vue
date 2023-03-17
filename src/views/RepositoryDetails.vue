<template>
    <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">These are details to my repository.</h1>
          <h2 class="subtitle">using Vue JS</h2>
        </div>
     </div>
    </section>
    <div class="container">
      <div class="table-container">
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>FULL-NAME</th>
              <th>TIME IT WAS PUSHED</th>
              <th>PRIVATE?</th>
              <th>ALLOW FORKING?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>{{ repo.full_name }}</td>
              <td>{{ repo.pushed_at }}</td>
              <td>{{ repo.private }}</td>
              <td>{{ repo.allow_forking }}</td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
  </div>
</template>

<script>
// import { RouterView } from 'vue-router';
import axios from "axios";

export default {
    name: "RepositoryDetails",
    components: {
        // RouterView,
    },
    data () {
    return {
      repo: {},
      pathName: null,
    };
 },
 created() {
    this.pathName = this.$route.params.name;
    axios.get(`https://api.github.com/repos/pelzmagic/${this.pathName}`).then((response) => {
        this.repo = response.data;
    });
 }
};
</script>

<style>
body {
  font: 15px/1.8 "Poppins", sans-serif !important;
}
.table td,
.table th {
  padding: 20px !important;
}
</style>
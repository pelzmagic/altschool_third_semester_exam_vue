<template>
  <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6">
      <div class="hero-body">
        <div style="border: 1px solid; display: inline-block; margin-left: 950px;">
          <router-link to="/:catchAll(.*)" button text="404 page" type="button" class="button is-hovered is-black mx-auto"></router-link>
        </div>
      <div class="container">
          <h1 class="title">My name is Akinloye Oluwapelumi and here is a list of all my github repositories</h1>
          <h2 class="subtitle">using Vue JS</h2>
      </div>
      </div>
    </section>
    <div class="container">
      <div class="table-container">
        <table class="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th class="noval">Name</th>
              <th>URL</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in displayedRepos" :key="repo.id">
              <td>{{ repo.id }}</td>
              <td @click="$router.push(`/repository-details/${repo.name}`)" class="button is-fullwidth is-primary is-outlined">{{ repo.name }}</td>
              <td><a :href="repo.html_url" target="_blank">{{ repo.html_url }}</a></td>
              <td>{{ repo.language }}</td>
            </tr>
          </tbody>
        </table>
        <ul class="pagination">
          <li class="page-item">
            <button type="button" class="button is-black is-hovered is-primary" v-if="page != 1" @click="page--">Previous</button>
          </li>
          <li class="page-item">
            <button type="button" class="button is-black is-hovered is-primary" v-for="(pageNumber, index) in pages" @click="page = pageNumber" :key="index">
              {{ pageNumber }}
            </button>
          </li>
          <li>
            <button type="button" class="button is-black is-hovered is-primary" @click="page++" v-if="page < pages.length">Next</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
 name: "MyRepository",
 data () {
    return {
      repos: [],
      page: 1,
      perPage: 5,
      pages:[],
    };
 },
 methods: {
    getData() {
      axios.get('https://api.github.com/users/pelzmagic/repos?per_page=100').then((response) => {
      this.repos = response.data;
    });
    },
    setPages () {
      let numberOfPages =
      Math.ceil(this.repos.length / this.perPage);
      for (let index = 1; index <=
      numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (repos) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return repos.slice(from, to);
    }
  },
  computed: {
    displayedRepos () {
      return this.paginate(this.repos);
    }
  },
 watch: {
  repos () {
    this.setPages();
  }
 },
 created: function() {
  this.getData();
 },
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
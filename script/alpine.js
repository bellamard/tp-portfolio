document.addEventListener("alpine:init", () => {
  Alpine.data("tabs", (defaultBox) => ({
    tab: defaultBox,
    box(e) {
      this.tab = e.target.getAttribute("href").replace("#", "");
    },
    isActive(tab) {
      return tab === this.tab;
    },
  }));

  Alpine.data("posts", () => ({
    loading: false,
    loaded: false,
    backends: [],
    frontends: [],
    bdd: [],
    autres: [],
    ci: [],
    loadPosts() {
      this.loading = true;
      fetch("http://localhost:3000/competence")
        .then((response) => response.json())
        .then((competence) => {
          const { frontend, backend, bdd, ci, autre } = competence;
          this.frontends = frontend;
          console.log(frontend);
          this.backends = backend;
          this.bdd = bdd;
          this.loading = false;
          this.loaded = true;
        })
        .catch((error) => console.log(error));
    },
  }));

  Alpine.data("posts2", () => ({
    loading: false,
    loaded: false,
    projets: [],
    loadPosts() {
      this.loading = true;
      fetch("http://localhost:3000/projet")
        .then((response) => response.json())
        .then((projet) => {
          this.projets = projet;
          this.loading = false;
          this.loaded = true;
        })
        .catch((error) => console.log(error));
    },
  }));
});

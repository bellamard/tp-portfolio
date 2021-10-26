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

  Alpine.store("posts", {
    loading: false,
    loaded: false,
    backends: [],
    frontends: [],
    bdd: [],
    autres: [],
    ci: [],
    loadPosts() {
      if (this.loaded) {
        return;
      }
      this.loading = true;
      fetch("http://localhost:3000/competence")
        .then((response) => response.json())
        .then((competence) => {
          for (const key of competence) {
            this.frontends = key.frontend;
            this.backends = key.backend;
            this.bdd = key.bdd;
            this.autres = key.autre;
            this.ci = key.ci;
          }
          this.loading = false;
          this.loaded = true;
        })
        .catch((error) => console.log(error));
    },
  });

  Alpine.store("posts2", {
    loading: false,
    loaded: false,
    projets: [],
    loadPosts() {
      if (this.loaded) {
        return;
      }
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
  });

  Alpine.data("posts2", () => ({
    init() {
      this.posts2.loadPosts();
    },
  }));
});

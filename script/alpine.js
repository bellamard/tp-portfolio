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
      fetch()
        .then((response) => response.json())
        .then((competence) => {
          this.frontends = competence.frontend;
          this.backends = competence.backend;
          this.bdd = competence.bdd;
          this.this.loading = false;
          this.loaded = true;
        })
        .catch((error) => console.log(error));
    },
  }));
});

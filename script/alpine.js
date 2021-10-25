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

  Alpine.data("competence", () => ({
    loading: false,
    backend: [],
    frontend: [],
    ci: [],
    autre: [],
    bdd: [],
    loaded: false,
    async load_Compe() {
      this.loading = true;
      fetch("http://localhost:3000/competence")
        .then((response) => {
          return response.json();
        })
        .then((competence) => {
          this.backend = competence.backend;
          this.frontend = competence.frontend;
          this.ci = competence.ci;
          this.autre = competence.autre;
          this.bdd = competence.bdd;
          this.loaded = true;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }));
});

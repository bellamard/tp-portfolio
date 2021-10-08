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
});
console.log("ALPINE OK");

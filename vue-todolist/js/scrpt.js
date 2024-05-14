const { createApp } = Vue;

createApp({
  data() {
    return {
      list: [
        "fare la spesa",
        "lavare la macchina",
        "visita medica",
        "ritiro lavanderia",
        "andare dal meccanico",
        "fare esercizio Boolean",
        "controllare email",
        "acquistare cellulare nuovo",
      ],
      message: "",
      newLi: "",
    };
  },
  methods: {
    addlist: function () {
      console.log(this.message);
      return newLi;
    },
  },
}).mount("#app");

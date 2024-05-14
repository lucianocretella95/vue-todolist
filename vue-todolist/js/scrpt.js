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
    };
  },
  methods: {
    addlist: function () {
      this.list.push(this.message);
    //   console.log(this.message);
    },
  },
}).mount("#app");

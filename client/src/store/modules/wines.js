const wines = {
  name: "wines",
  namespaced: true,
  state: {
    wines: [],
    wine: {}
  },

  mutations: {
    setwines(state, list) {
      state.wines = list;
    },
    setwine(state, list) {
      state.wine = list;
    },
  },

  actions: {
    //ON RECUPERE LES winesS

    async fetchWines(context) {
      const res = await fetch("http://localhost:3001/api/wines/", {
        "method": "GET",
      })
      const data = await res.json();
      context.commit("setwines", data);
    },

    //Print d'un wines

    async findOnewines(context, _id) {
      const res = await fetch("http://localhost:3001/api/wines/" + _id, {
        "method": "GET",
      })
      const data = await res.json();
      context.commit("setwine", data);
    },

    //On cherche un wines 

    async searchWinesByName(context, [type, query]) {
      const res = await fetch("http://localhost:3001/api/wines/" + type + "/" + query, {
        "method": "GET",
      })
      const data = await res.json();
      context.commit("setwines", data);
    },

    //filter by color
    async searchWinesByColor(context, query) {
      const res = await fetch("http://localhost:3001/api/wines/color/" + query, {
        "method": "GET",
      })
      const data = await res.json();
      context.commit("setwines", data);
    },

    //delete one wine
    async deleteWine(context, _id) {
      await fetch("http://localhost:3001/api/wines/" + _id, {
        "method": "DELETE",
      });
      context.commit("setwines");
    },

    async addWine(context, body) {
      await fetch("http://localhost:3001/api/wines/", {
        "method": "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      context.commit('setwines')
    },
    async updateWine(context, [id, wine]) {
      await fetch("http://localhost:3001/api/wines/" + id, {
        "method": "PATCH", 
        body: JSON.stringify(wine),
        "headers": {
          "Content-type": "application/json",
      }
      });
      
      context.commit('setwine')
    }
  }
}
export default wines;
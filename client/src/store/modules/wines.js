const wines = {
  name: "wines",
  namespaced: true,
  state: {
    wines: [],
    Total:[],
    wine: {}
  },

  mutations: {
    setwines(state, list) {
      state.wines = list;
    },
    setwine(state, list) {
      state.wine = list;
    },
    setTotal(state, list){
      state.Total = list;
    }
  },

  actions: {
    //ON RECUPERE LES winesS

    async fetchWines(context) {
      const res = await fetch("/api/wines/")
      const data = await res.json();
      context.commit("setwines", data);
    },

    //Print d'un wines

    async findOnewines(context, _id) {
      const res = await fetch("/api/wines/" + _id)
      const data = await res.json();
      context.commit("setwine", data);
    },

    async getWineQuantity(context, _id) {
      const res = await fetch("/api/wines/" + _id)
      const data = await res.json();
      context.commit("setwine", data.quantite);
      console.log(data.quantite)
    },

    //On cherche un wines 

    async searchWinesByName(context, [type, query]) {
      const res = await fetch("/api/wines/" + type + "/" + query)
      const data = await res.json();
      context.commit("setwines", data);
    },

    //filter by color
    async searchWinesByColor(context, query) {
      const res = await fetch("/api/wines/color/" + query)
      const data = await res.json();
      context.commit("setwines", data);
    },

    //delete one wine
    async deleteWine(context, _id) {
      await fetch("/api/wines/" + _id, {
        "method": "DELETE",
        "headers": {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      const res = await fetch("/api/wines/")
      const data = await res.json();
      context.commit("setwines", data);
    },

    async addWine(context, body) {
      await fetch("/api/wines/", {
        "method": "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: 'Bearer ' + localStorage.getItem('token')

        },
        body: JSON.stringify(body)
      })
      context.commit('setwines')
    },
    async updateWine(context, [id, wine]) {
      await fetch("/api/wines/" + id, {
        "method": "PUT",
        body: JSON.stringify(wine),
        "headers": {
          "Content-type": "application/json",

          Authorization: 'Bearer ' + localStorage.getItem('token')

        }
      });
    },
    async wineKpi(context) {
      const res = await fetch("/api/wines/kpi/sum"
      );
      const data= await res.json();
      console.log(data)
      context.commit("setTotal", data)
    }
  }
}
export default wines;
const orders = {
  name: "orders",
  namespaced: true,
  state: {
    orders: [],
    order: {}
  },

  mutations: {
    setOrders(state, list) {
      state.orders = list;
    },
    setOrder(state, list) {
      state.order = list;
    },
  },

  actions: {
    //ON RECUPERE LES ordersS

    async fetchOrders(context) {
      const res = await fetch("/api/orders/", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      const data = await res.json();
      context.commit("setOrders", data);
    },

    //Print d'un orders

    async findOneOrder(context, _id) {

      const res = await fetch("/api/orders/" + _id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      const data = await res.json();
      context.commit("setOrder", data);
    },

    //On supprime un order 
    async deleteOrder(context, _id) {
      await fetch("/api/orders/" + _id, {
        "method": "DELETE",
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      const res = await fetch("/api/orders/",{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
      const data = await res.json();
      context.commit("setOrders", data);
    },

    //Nouvel order

    async newOrder(context, body) {
      const res = await fetch("/api/orders/", {
        "method": "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')

        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      console.log(data)
      context.commit('setOrder', data)
    },

    //On ajoute un vin au Bon

    async addProductToOrder(context, [id, order]) {
      const res = await fetch("/api/orders/" + id, {
        "method": "PUT",
        body: JSON.stringify(order),
        "headers": {
          "Content-type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')

        }
      })
      const data = await res.json();
      context.commit('setOrder', data)
    },

    //On valide un bon ( plus modifiable par la suite )
    async validateOrder(context, [id, body]) {
      await fetch("/api/orders/validate/" + id, {
        "method": "PUT",
        body: JSON.stringify(body),
        "headers": {
          "Content-type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')

        }
      });
      context.commit('setOrder')
    },

    //On modifie les quantites dans un order    
    async updateOrder(context, [id, order]) {
      await fetch("/api/orders/confirm/" + id, {
        "method": "PUT",
        body: JSON.stringify(order),
        "headers": {
          "Content-type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')

        }
      });
      context.commit('setOrder')
    },
    //On supprime uin vin d'un bdc
    async delWine(context, [id, wine]) {
      await fetch("http://localhost:3001/api/orders/deleteOneWine/" + id, {
        "method": "PUT",
        body: JSON.stringify(wine),
        "headers": {
          "Content-type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')

        }
      });
    }
  }
}
export default orders;
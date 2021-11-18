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
        const res = await fetch("http://localhost:3001/api/orders/")
        const data = await res.json();
        context.commit("setOrders", data);
      },
  
      //Print d'un orders
  
      async findOneOrder(context, _id) {
        const res = await fetch("http://localhost:3001/api/orders/" + _id)
        const data = await res.json();
        context.commit("setOrder", data);
      },
  
      //On cherche un orders 
  
      //delete one wine
      async deleteOrder(context, _id) {
        await fetch("http://localhost:3001/api/orders/" + _id, {
          "method": "DELETE",
        });
        const res = await fetch("http://localhost:3001/api/orders/")
        const data = await res.json();
        context.commit("setOrders", data);
      },
  
      async newOrder(context, body) {
        const res = await fetch("http://localhost:3001/api/orders/", {
          "method": "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        });
        const data = await res.json();
        console.log(data)
        context.commit('setOrder', data)
      },
      
      async addProductToOrder(context, [id, order]) {
        await fetch("http://localhost:3001/api/orders/" + id, {
          "method": "PUT",
          body: JSON.stringify(order),
          "headers": {
            "Content-type": "application/json",
          }
        });
  
        context.commit('setOrder')
      },
      async updateOrder(context,[id, order]) {
        await fetch("http://localhost:3001/api/orders/confirm/" + id, {
          "method": "PUT",
          body: JSON.stringify(order),
          "headers": {
            "Content-type": "application/json",
          }
        });
        }
    }
  }
  export default orders;
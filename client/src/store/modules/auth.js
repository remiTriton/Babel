const auth = {
    name: "auth",
    namespaced: true,
    state: {
      users: [],
      user: {}
    },
  
    mutations: {
      setUsers(state, list) {
        state.users = list;
      },
      setUser(state, list) {
        state.user = list;
      },
    },
  
    actions: {
//On recupere les utilisateurs  
      async getUsers(context) {
        const res = await fetch("http://localhost:3001/api/users/", {
          "method": "GET",
        })
        const data = await res.json();
        context.commit("setUsers", data);
      },
  
      //On récupère un user
  
      async getOneUser(context, _id) {
        const res = await fetch("http://localhost:3001/api/users/" + _id, {
          "method": "GET",
        })
        const data = await res.json();
        context.commit("setUser", data);
      },
  
      //On cherche un user 
  
      async getUserByName(context,query) {
        const res = await fetch("http://localhost:3001/api/users/"  + query, {
          "method": "GET",
        })
        const data = await res.json();
        context.commit("setUsers", data);
      },
  
      //Filtre utilisateur par role
      async getUserByRole(context, query) {
        const res = await fetch("http://localhost:3001/api/users/role/" + query, {
          "method": "GET",
        })
        const data = await res.json();
        context.commit("setUsers", data);
      },
  
      //delete one wine
      async delUser(context, _id) {
        await fetch("http://localhost:3001/api/users/" + _id, {
          "method": "DELETE",
        });
        context.commit("setUsers");
      },
  
      async addUser(context, body) {
        await fetch("http://localhost:3001/api/users/", {
          "method": "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        context.commit('setUsers')
      },
      async updateUserCrud(context, [id, user]) {
        await fetch("http://localhost:3001/api/users/" + id, {
          "method": "PATCH", 
          body: JSON.stringify(user),
          "headers": {
            "Content-type": "application/json",
        }
        })
        console.log(user)
        context.commit('setUsers', context.state.user)
      }
    }
  }
  export default auth;
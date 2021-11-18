const auth = {
  name: "auth",
  namespaced: true,
  state: {
    users: [],
    user: {},
    token: null,
  },
  mutations: {
    setUsers(state, list) {
      state.users = list;
    },
    setUser(state, list) {
      state.user = list;
    },
    setAuth(state, list) {
      state.token = list;
    },
    logout(state, token) {
      state.token = token;
      localStorage.removeItem("token");
    },
  },

  actions: {
    //On recupere les utilisateurs  
    async getUsers(context) {
      const res = await fetch("/api/users/");
      const data = await res.json();
      context.commit("setUsers", data);
    },
    //On récupère un user
    async getOneUser(context, _id) {
      const res = await fetch("/api/users/" + _id)
      const data = await res.json();
      context.commit("setUser", data);
    },
    //On cherche un user 
    async getUserByName(context, query) {
      const res = await fetch("/api/users/" + query)
      const data = await res.json();
      context.commit("setUsers", data);
    },

    //Filtre utilisateur par role
    async getUserByRole(context, query) {
      const res = await fetch("/api/users/role/" + query)
      const data = await res.json();
      context.commit("setUsers", data);
    },

    //supression d'un utilisateur
    async delUser(context, _id) {
      await fetch("/api/users/" + _id, {
        "method": "DELETE",
      });
      context.commit("setUsers");
    },
    //ajout d'un utilisateur via crud admin et/ou register
    async addUser(context, body) {
      await fetch("/api/users/", {
        "method": "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      context.commit('setUsers')
    },
    //Update d'un utilsiateur version crud admin
    async updateUserCrud(context, [id, user]) {
      await fetch("/api/users/" + id, {
        "method": "PUT",
        body: JSON.stringify(user),
        "headers": {
          "Content-type": "application/json",
        }
      })
      context.commit('setUsers', context.state.user)
    },
    //Connection d'un utilisateur
    async login(context, body) {
      const res = await fetch("/api/users/login", {
        "method": "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      const data = await res.json();
      localStorage.setItem('token', data);
      console.log(data)
      context.commit('setAuth', data)
    },
    //Deconnection d'un utilisateur 
    logout(context) {
      let token = null;
      context.commit("logout", token);
    },
  }
}
export default auth;
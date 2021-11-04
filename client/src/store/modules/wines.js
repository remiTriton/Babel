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

        async searchWinesByName(context, query) {
            const res = await fetch("http://localhost:3001/api/wines/" + query, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setwines", data);
        },
        async searchWinesByDpt(context, query) {
            const res = await fetch("http://localhost:3001/api/wines/" + query, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setwines", data);
        }, async searchWinesByDomain(context, query) {
            const res = await fetch("http://localhost:3001/api/wines/" + query, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setwines", data);
        }, async searchWinesByColor(context, query) {
            const res = await fetch("http://localhost:3001/api/wines/" + query, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setwines", data);
        },


        async deletewines(context, _id) {
            await fetch("http://localhost:3001/api/wines/" + _id, {
                "method": "DELETE",
            });


            context.commit("setwines");
        },
        async addwines(context, body) {
            const res = await fetch("http://localhost:3001/api/wines/", {
                "method": "wines",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": 'Bearer ' + localStorage.getItem('token')
                },

                body: JSON.stringify(body)
            })
            const data = await res.json();
            console.log(data)
            context.commit('setwines')
        }


    }

}
export default wines;
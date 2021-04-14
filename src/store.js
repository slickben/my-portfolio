import { createStore } from 'vuex'
import moment from 'moment';

// Create a new store instance.

const store = createStore({
    state () {
      return {
          toggleMenu: false
      }
    },
    getters: {
    //     isAuthenticated (state)  {
    //         return  !!state.token
    //     },
    },
    mutations: {
        TOGGLE_MENU  (state) {
            state.toggleMenu = !state.toggleMenu
        }
    },
    actions: {
        // selectReceiver ({ commit, state }, receiver) {
        //   commit('Add_RECEIVER', receiver)

        //   commit('GET_ALL_MESSAGE_OF_THE_SELECTED_USER', receiver)

        //   state.users.map( user => {
        //         if(user.user === receiver && user.hasNewMessage){
        //             user.read = true
        //         }
        //   })
        //   console.log(state.users)
        // },
    }
})

export default {
    store
}
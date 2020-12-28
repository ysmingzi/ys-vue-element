import vuex from 'vuex'
import vue from 'vue'
vue.use(vuex)




const store = new vuex.Store({
    state: {
       demo:'0'
   } 
})

export default store
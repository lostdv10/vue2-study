import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import { nanoid } from "nanoid"


Vue.use(Vuex)

const countAbout = {
    namespaced: true,	// 开启命名空间
    actions:{
        jiaOdd(context,value){
            console.log('actions中的jiaOdd被调用了')
            if(context.state.sum % 2){
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value){
            console.log('actions中的jiaWait被调用了')
            setTimeout(()=>{
                context.commit('JIA',value)
            },500)
        }
    },
    //准备mutations——用于操作数据（state）
    mutations:{
        JIA(state,value){
            console.log('mutations中的JIA被调用了')
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutations中的JIAN被调用了')
            state.sum -= value
        },

        
    },
    //准备state——用于存储数据
    state:{
        sum: 0,
        school: '尚硅谷',
        subject: '前端',

    },

    //准备getters——用于将state中的数据进行加工
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
    }

const personAbout = {
    namespaced: true,	// 开启命名空间
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => { alert(error.message) }
            )
        }
    },
    //准备mutations——用于操作数据（state）
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    //准备state——用于存储数据
    state:{
        personList: []
    },

    //准备getters——用于将state中的数据进行加工
    getters:{
        
        firstPersonName(state){
            if(state.personList.length === 0)
                return
            else
                return state.personList[0].name }
    }

}


//创建并暴露store
export default new Vuex.Store({
    modules:{
    countAbout,    
    personAbout,
}
})






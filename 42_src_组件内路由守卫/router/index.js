//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyv',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{title:'新闻'},
                    // 🔴独享守卫，特定路由切换之后被调用
                    beforeEnter(to,from,next){
                        console.log('独享路由守卫',to,from)
                        if(localStorage.getItem('school') === 'atguigu'){
                            next()
                        }else{
                            alert('暂无权限查看')
                        }
                    }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{title:'详情'},
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from)
	document.title = to.meta.title || '硅谷系统'
})

//导出路由器
export default router

module.exports = {
	title:'Hello Vuepress',
	description:'Just playing around',
    head:[

       ['link',{rel:'icon',href:"https://nodejs.org/static/images/logo.svg"}]
    ],
     host : "127.0.0.2",
     port : "8888",
     themeConfig:{

        search:true,
        searchMaxSuggestion:10,
        logo:"https://nodejs.org/static/images/logo.svg",
        nav:[
            {text:'Home',link:'/'},
            {text:'前端相关',
            items:[
                 {text:'vuepress',link:'/vuepress/'},
                 {text:'layui',link:'/layui/'},
            ]},
            {text: 'BiliBili网站',link:"https://www.bilibili.com/",target:'_blank'}

        ],
        
        // sidebar:[

        //     {
        //         title:"前端相关",
        //         children:[
        //             '/vuepress/',
        //             '/layui/'
 
        //         ]
        //     },
        //     {
        //         title:"后端相关",
        //         children:[
        //             '/php/',
        //             '/thinkphp/'

        //         ]
        //     },

        // ]

        // sidebar:{

        //       '/vuepress/':[
                     
        //              'one'

        //       ],

        //       activeHeaderLinks: false, 
        
        sidebar:{
            '/vuepress/':[
              {
            	title : null,
            	collapsable:false,
            	sidebarDepth:2,
            	children:[
                     {title:'vuepress',path:'/vuepress/'},
                     {title:'介绍',path:'/vuepress/one'}

            	]
                     
            	}
            ]
           }
        


     }


 }

     


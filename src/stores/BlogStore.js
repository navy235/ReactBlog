import createStore from 'fluxible/addons/createStore';

let BlogStore=createStore({

	storeName:'BlogStore',

	handlers:{
		'LOADBLOG':'loadBlog',
		'CREATEBLOG':'createBlog',
		'UPDATEBLOG':'updateBlog',
		'DELETEBLOG':'deleteBlog'
	},
	initialize: function () {
        this.blogs = [];
        this.currentBlog=null;
    },
    loadBlog:function(res){
    	if(res.payload.id){
    		this.currentBlog=res;
    	}else{
    		this.blogs=res;
    	}
    },
    createBlog:function (res) {
    	this.blogs.push(res);
    }




})


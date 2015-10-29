import Blog from './models/blog';

var BlogService = {
    name: 'blog',
    read: function (req, resource, params, config, callback) {
        if(params.id){
             Blog.findById(params.id,(err, blog) =>{
                callback(err, blog);
            });
        }else{
            Blog.find((err, blogs) =>{
               callback(err, blogs);
            });
        }
    },
    create: function (req, resource, params, body, config, callback) {
         Blog.create(body, (err, blog)=>{
            callback(err, blog);
        })
    },

    update: function (req, resource, params, body, config, callback) {
        Blog.findByIdAndUpdate(params.id, body, {new: true}, (err, blog)=> {
            callback(err, blog);
        });
    },

    delete: function (req, resource, params, config, callback) {
        Blog.findByIdAndRemove(params.id, body, function (err) {
             callback(err, {success:err==null}});
        });
    },

}

export default BlogService
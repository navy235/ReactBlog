import mongoose from 'mongoose'
import config from '../configs/server';

var db = mongoose.createConnection(config.mongo.blog);

var BlogSchema = new mongoose.Schema({
    title: String,
    metaTitle: String,
    metaDesc: String,
    desc: String,
    publish: Boolean,
    url: String,
    imageUrl: String,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
});

var Blog = db.model('Blog', BlogSchema);

export default Blog;
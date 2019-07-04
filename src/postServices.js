import axios from "axios";

axios.defaults.baseURL = "http://localhost/posts";

export default class postServices{
    getAllPosts(){
        return axios.get(`/getPosts.php`);
    }

    writePost(post){
        if(post.id){
            return axios.post(`/writepost.php?id=${post.id}`,post)
        }
        else{
            return axios.post(`/writepost.php`,post)
        }
    }
}
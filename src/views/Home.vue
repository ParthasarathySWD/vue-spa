<template>
    <div class="row">
        <div class="row">
            <!-- FORM -->
            <div class="col s6">
                <PostForm/>
            </div>
        </div>
        <div class="row">
            <div class="col s6" v-for="(post, index) in posts"
            :key = "post.id"
            :index = "index"
            :item = "post"
            >
                <div class="card">
                    <div class="card-content">
                        <p class="card-title">{{post.title}}</p>
                        <p class="timestamp">{{post.createdAt}}</p>
                        <p>{{post.body}}</p>
                    </div>

                    <div class="card-action">
                        <a href ="#" class="btn-green">Edit</a>
                        <a href ="#" class="btn-red">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import PostServices from "../postServices";
import PostForm from "../components/Postform";

const postServices = new PostServices();
export default {
    name: "Home",
    components: {
        PostForm
    },
    data(){
        return {
            "posts" : [],
        }
    },
    created(){
        postServices.getAllPosts().then(res => {
            this.posts = res.data;
            console.log(res.data);
        }).catch(res => {
            console.error(res);
        })

    }
}
</script>

<style>
.btn-green{
    color: green !important;
}

.btn-red{
    color: red !important;
}


.card .card-content .timestamp{
    color:#222;
    margin-bottom: 10px;
}

.card .card-content .card-title{
    color:#999;
    margin-bottom: 0px;
}

.card .card-content .card-body{
    color:#222;
    margin-bottom: 5px;
}
</style>

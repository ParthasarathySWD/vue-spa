<template>
    <form v-if="!loading" class="form" @submit.prevent="Submit">
        <div class="input-field">
            <label for="title">Title</label>'
            <input type="text"
                name="title"
                v-model="title"
                class="validate"
            >
            <span class="helper-text" data-error="Title must not be empty"></span>
        </div>
        <div class="input-field">
            <label for="body">Body</label>'
            <input type="text"
                name="body"
                v-model="body"
                class="validate"
            >
            <span class="helper-text" data-error="Body must not be empty"></span>
        </div>
        <button type="submit" class="waves-effect waves-light btn">Add</button>
    </form>
</template>

<script>
import PostServices from "../postServices";
const postServices = new PostServices();

export default {
    name: "PostForm",
    data(){
        return{
            loading: false,
            title: "",
            body: ""
        }
    },
    methods: {
        Submit(){
            this.loading = true;
            const post = new FormData();
                post.append("title", this.title);
                post.append("body", this.body);
            postServices.writePost(post)
                .then(res => {
                    this.loading = false;
                    this.title = ""
                    this.body = ""
                    post.prepend(res.data);
                })
        }
    }
}
</script>

<style>

</style>

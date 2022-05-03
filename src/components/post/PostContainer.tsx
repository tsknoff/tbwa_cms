import React from 'react';
import {postAPI} from "../../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../../models/IPost";

const PostContainer = () => {
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(5)
    const [createPost, {}] = postAPI.useCreatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>ADD new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка</h1>}
                {posts && posts.map(post =>
                    <PostItem post={post} key={post.id} />
                )}
            </div>
        </div>
    );
};

export default PostContainer;
import React from 'react';
import {postAPI} from "../services/PostService";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка</h1>}
                {posts && posts.map(post =>
                    <React.Fragment key={post.id}>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                        <button>Удалить</button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default PostContainer;
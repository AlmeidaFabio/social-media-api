import { CreatePostsController } from "./CreatePostsController";
import { GetPostCommentsController } from "./GetPostCommentsControler";
import { PostCommentController } from "./PostCommentController";
import { SetLikedController } from "./SetLikedController";

const createPostController = new CreatePostsController()
const likeController = new SetLikedController()
const commentController = new PostCommentController()
const getCommentsController = new GetPostCommentsController()

export {
    createPostController,
    likeController,
    commentController,
    getCommentsController
}
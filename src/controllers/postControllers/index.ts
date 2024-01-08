import { CreatePostsController } from "./CreatePostsController";
import { SetLikedController } from "./SetLikedController";

const createPostController = new CreatePostsController()
const likeController = new SetLikedController()

export {
    createPostController,
    likeController
}
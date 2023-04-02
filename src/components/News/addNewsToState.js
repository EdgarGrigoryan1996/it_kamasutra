import { getFriendsPosts } from "../../redux/Reducers/getFriendsPosts";
import store from "../../redux/store";

const news = getFriendsPosts(store.getState());

export default news;
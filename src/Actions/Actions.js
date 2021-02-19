import { INCREMENT, DECREMENT, LIKE, DISLIKE } from "../Actions/ActionType";

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const Like = () => ({
    type: LIKE,
});

export const Dislike = () => ({
    type: DISLIKE,
});
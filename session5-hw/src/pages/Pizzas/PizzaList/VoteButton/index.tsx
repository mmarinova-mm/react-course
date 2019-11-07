import {downvote, IPizza, upvote} from "../../../../modules/pizzas";
import {useDispatch} from "react-redux";
import React from "react";

export function VoteButton({item}: { item: IPizza }) {
    const dispatch = useDispatch();

    return <button className={"btn " + (item.viewerLiked ? "btn-success" : "btn-primary") }
                   onClick={() => item.viewerLiked ? dispatch(downvote(item)) : dispatch(upvote(item))}>
        +{item.likes}
    </button>
}
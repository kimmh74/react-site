import React from "react";
import Comment from "./Comment";
import Day03_0811 from "./Day3_0811";

function CommentList(props) {

    return (
        <div>
            <Comment name={"김명횡 "} comment={"안녕 하십니까?"} />
            <Comment name={"붕붕이 "} comment={"겁나 반갑습니다."} />
            <Comment name={"손흥민 "} comment={"리액트가 뭔가요?"} />
        </div>
    )
}

export default CommentList
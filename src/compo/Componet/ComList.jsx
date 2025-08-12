import React from "react";
import Com from "./Com";

function ComList(props) {

    return (
        <div>
            <Com name={"김명횡 "} comment={"안녕 하십니까?"} />
            <Com name={"붕붕이 "} comment={"겁나 반갑습니다."} />
            <Com name={"손흥민 "} comment={"리액트가 뭔가요?"} />
        </div>
    )
}

export default ComList
import { useState } from "react"


export default function Counter() {
    //훅hook useState사용하기
    // const [상수이름,세터함수] = useState(초기값)
    const [count, setCount] = useState(0)
    return (
        <>
        <h2>Number값의 상태 변화 체크</h2>
                <h3>카운터:{count}</h3>
                {/*setCount(cont+1)>>>count + cont+1*/}
                <button onClick={()=>setCount(count +1)}>1씩 ++증가</button>
                <button onClick={()=>setCount(count -1)}>1씩 --감소</button>
          
        </>

    )
}







// function Counter(){

// }
// export default Counter
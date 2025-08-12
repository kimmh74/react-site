import { useState } from "react"

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false)

    return (

        <>
            <h2>Boolean값의 상태 변화 체크</h2>
            <button onClick={() => setIsOn(!isOn)}>
                버튼{isOn ? "NO_TURE" : "OFF_FALSE"}
                {/* 버튼{!ison} */}
            </button>

        </>

    )

}
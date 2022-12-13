import { listenerCount } from "process"
import React, { useState } from "react"

const onAlways = (props: any) => {
    console.log(props.writersbyLetter)
}

export function WritersByLetter(props: any) {
    console.log("pre = ", props.showingAny)
    let [charat, setchar] = useState(props.writersByLetter)
    props.showingAny = false
    console.log("after = ", props.showingAny)

    return (
        <div>
            <h3>{charat}</h3>
        </div>
    )
}
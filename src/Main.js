import React from "react"
import Component from "./Component"
import data from "./data"

export default function Main() {
    const components = data.map(item => {
        return (
            <Component 
                key = {item.id}
                item = {item}
            />
        )
    })

    return (
        <div>
            {components}
        </div>
    )
}
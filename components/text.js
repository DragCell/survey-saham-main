import React from 'react'

function Text({ children, customStyle }) {
    return (
        <div style={{
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 26,
            textAlign: 'center',
            textShadow: "-4px 4px 5px black",
            ...customStyle
        }}>{children}
        </div>
    )
}

export default Text

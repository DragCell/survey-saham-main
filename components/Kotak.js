import React from 'react'

function Kotak({ children }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%,',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'top',
                alignItems: 'center',
                flexDirection: 'column',
                margin: "2% 2% 2% 2%",
                padding: "2.5% 2.5% 2.5% 2.5%",
                background: 'darkgrey',
                width: '60%',
                borderRadius: 25,

            }}>
                {children}
            </div>
        </div>
    )
}

export default Kotak

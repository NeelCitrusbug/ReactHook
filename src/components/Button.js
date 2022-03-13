import React from 'react'

function Button({eventhandler,children}) {
    console.log(`Rendering Button ${children}`)
  return (
    <div>
        <button onClick={eventhandler}>{children}</button>
    </div>
  )
}

export default React.memo(Button)

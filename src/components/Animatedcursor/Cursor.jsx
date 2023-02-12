import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
  return (
    <div>
      <AnimatedCursor
      innerSize={18}
      outerSize={40}
      color='243, 231, 211'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />

    </div>
  )
}

export default Cursor

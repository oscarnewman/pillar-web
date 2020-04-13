import React from 'react'

interface HighlightProps {
  color: string
}

const Highlight: React.SFC<HighlightProps> = ({ color, children }) => (
  <mark>
    {children}
    <style jsx>{`
      mark {
        background: linear-gradient(0deg, ${color} 50%, transparent 50%);
      }
    `}</style>
  </mark>
)

export default Highlight

import React from 'react'

export default function Button(props) {
  return (
    <button type="submit" onClick={e => props.onClick(e)}>
      SIGN UP
    </button>
  )
}

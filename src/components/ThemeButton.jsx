import React from 'react'

const ThemeButton = ({onTheme, text}) => {
  return (
    <button type='button' onClick={onTheme}>현재 상태 : {text ? '라이트모드' : '다크모드'}</button>
  )
}

export default ThemeButton
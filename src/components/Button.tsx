import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonPropos = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonPropos) {

  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  )
}
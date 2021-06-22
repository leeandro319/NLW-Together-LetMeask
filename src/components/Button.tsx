import {ButtonHTMLAttributes} from 'react'

import '../styles/button.scss'

type ButtonPropos = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props:ButtonPropos){

  return(
    <button className="button" {...props}/>
  )
}
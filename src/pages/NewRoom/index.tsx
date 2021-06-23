
import {FormEvent, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import IllustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import '../../styles/auth.scss';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';


export function NewRoom(){

let history = useHistory()

const [newRoom, setNewRoom] = useState('')

const {user} = useAuth();

async function handleCreateRoom(event: FormEvent){
  event.preventDefault();

  if(newRoom.trim() === ''){
    return
  }
  const roomRef = database.ref('rooms');
  const firebaseRoom = await roomRef.push({
    title: newRoom,
    authorId: user?.id,
  })

  history.push(`/rooms/${firebaseRoom.key}`)
}

  return(
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="Illustration" />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dpuvidas de sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <h2>Criar uma nova Sala</h2>
          <img src={logoImg} alt="Logo" />
          <form onSubmit={handleCreateRoom} >
            <input 
              type="text"
              placeholder="Nome da sala" 
              onChange={event=>setNewRoom(event.target.value)} 
              value={newRoom}
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}
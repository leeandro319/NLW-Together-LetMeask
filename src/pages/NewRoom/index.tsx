
import {Link} from 'react-router-dom';
import IllustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import '../../styles/auth.scss';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';


export function NewRoom(){

 //const {user} = useAuth();

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
          <form >
            <input 
              type="text"
              placeholder="Nome da sala"  
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}
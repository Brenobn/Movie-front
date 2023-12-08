import { GoArrowLeft, GoPlus } from 'react-icons/go';
import { IoIosClose } from 'react-icons/io';

import { Container, ContentContainer } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';


export function New() {
  return(
    <Container>
      <Header />
      <ContentContainer>
        <div className='WayBack'>
          <GoArrowLeft />
          <a href="#">Voltar</a>
        </div>
        <h1>Novo filme</h1>
        <div className='Col2'>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
        <textarea placeholder='Observações'></textarea>
        <div className="Section">
          <h4>Marcadores</h4>
          <div className='children'>
            <button>
              React
              <IoIosClose size={24}/>
            </button>
            <button>
              Novo marcador
              <GoPlus />
            </button>
          </div>
        </div>
        <div className="buttons">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>
      </ContentContainer>
    </Container>
  );
}
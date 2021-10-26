import React from "react";
import { Container, DropboxLogo, Navigation, Form } from './styles'
  
  const MenuForm: React.FC = () => {
    function handleToggle() {
      if (window.toggleActiveMenu) window.toggleActiveMenu();
    }


  return (
    <Container>
      <Navigation>
          <h1>
            <DropboxLogo/>
            <span>Dropbox</span>
          </h1>

          <button className="action--close" onClick={handleToggle}>✕</button>
          </Navigation>
          <Form>
            <span className="title">Registre-se</span>
            <span className="subtitle"> Preencha o formulário abaixo</span>

            <input type="text" placeholder="Nome"/>       
            <input type="text" placeholder="Sobrenome"/>       
            <input type="email" placeholder="E-mail"/>        
            <input type="password" placeholder="Senha"/>    

            <button>Prosseguir</button>

            <span className="terms">
                Está página está sujeita á política de privacidade e aos termos de serviço.
              </span>    
            </Form>
      
     
    </Container>
  )
}

export default MenuForm;
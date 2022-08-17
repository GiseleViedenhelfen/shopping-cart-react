import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className='container-links-header'>
        <h1>{`Resultados para a pesquisa "computador":`}</h1>
        <p>
          <Link to="/cart">Carrinho</Link>
        </p>
      </div>
    )
  }
}
export default Header;
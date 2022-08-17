import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css'
import Header from '../header/Header';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      resultApi: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick({target}) {
  const { resultApi } = this.state;
  const title = target.value;
  const findTitle = resultApi.find((item) => item.title === title);
  const getLocalStorage = JSON.parse(localStorage.getItem('cart'));
  if (getLocalStorage === null) {
    localStorage.setItem('cart', JSON.stringify([findTitle]));
  }
  else {
    const currentLocalStorage = [...getLocalStorage, findTitle];
    localStorage.setItem('cart', JSON.stringify(currentLocalStorage));
  }
}

componentDidMount() {
  const { date } = this.props;
  this.setState({ resultApi: date })
}
  render() {
    const { resultApi } = this.state;
  
    return (
      <div>
     <Header />
      <div className="cards-container">
        {resultApi.length > 0 && resultApi.map((item) =>(
          <div key= { item.id } className="card"> 
            <ul>
              <li> <img src={ item.thumbnail } alt={ item.title }/></li>
              <li>{ item.title }</li>
              <li>{ `R$ ${item.price}` }</li>
              
              <button 
                type="button"
                value={item.title}
                onClick={this.handleClick}
              >
                Adicionar ao Carrinho
              </button>
           
            </ul>
          </div>
        ))}
      </div>
      
    </div>
    )
  }
}
Card.propTypes = {
  date: PropTypes.array.isRequired,
};
export default Card;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css'

class Card extends Component {
  constructor() {
    super();
    this.state = {
      resultApi: [],
    };
  }

componentDidMount() {
  const { date } = this.props;
  this.setState({ resultApi: date })
}
  render() {
    const { resultApi } = this.state;
  
    return (
    <div className="cards-container">
      {resultApi.length > 0 && resultApi.map((item) =>(
        <div key= { item.id } className="card"> 
        <ul>
         <li> <img src={ item.thumbnail } alt={ item.title }/></li>
          <li>{ item.title }</li>
          <li>{ `R$ ${item.price}` }</li>
          <li>
          <button 
            type="button"
            onClick={() => {}}
          >
            Adicionar ao Carrinho
          </button>
          </li>
        </ul>
        </div>
      ))}
    </div>
    )
  }
}
Card.propTypes = {
  date: PropTypes.array.isRequired,
};
export default Card;
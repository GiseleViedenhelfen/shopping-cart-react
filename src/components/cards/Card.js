import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Card extends Component {
  constructor() {
    super();
    this.state = {
      resultApi: [],
    };
  }

componentDidMount() {
  const { date } = this.props;
  console.log(date);
      this.setState({ resultApi: date })
}
  render() {
    const { resultApi } = this.state;
  
    return (
    <div>
      {resultApi.length > 0 && resultApi.map((item) =>(
        <ul key= {item.id}>
         <li> <img src={item.thumbnail} alt={item.title}/></li>
          <li>{item.title}</li>
          <li>{`R$ ${item.price}`}</li>
        </ul>
      ))}
    </div>
    )
  }
}
Card.propTypes = {
  date: PropTypes.array.isRequired,
};
export default Card;
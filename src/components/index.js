import React, { Component } from 'react';
import { fetchApi } from '../helpers/callApi';
import Card from './cards/Card';

class Main extends Component {
constructor() {
  super();
  this.state = {
    resultApi: [],
  }
}
async componentDidMount() {
const response = await fetchApi();
const results = response.results;
const mapResults = results.map((item) => item);
this.setState({ resultApi: mapResults })
}
render() {
  const { resultApi } = this.state;
  return(
    <div>
      {resultApi.length > 0 && <Card  date={resultApi}/>}    
    </div>
  )
}
}
export default Main;
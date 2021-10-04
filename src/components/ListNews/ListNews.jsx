import axios from 'axios';
import React, { Component } from "react";
import Card from '../Card/Card'


class ListNews extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
      newsList: [this.props.noticias]
    }
  }

  async componentDidMount(){
    const precarga = await axios.get('https://newsapi.org/v2/top-headlines?country=jp&pageSize=5&apiKey=a34146bdde154dec8533dfe5385ebc26')
    const data = precarga.data.articles
    console.log("Hace axios: ", data);
    this.setState({newsList: [...this.state.newsList, data]})
  }

  handleForm = () => {
    this.setState([...this.state.newsList, this.props.info])
  }

  paintNews = () => {
    return this.state.newsList.map((article,i) => <Card key={i} info={article} delete={()=> this.deleteNew(i)}/>)
  }
  
  deleteNew = (i) => {
    const refreshList = this.state.newsList.filter((article,x) => x !== i)
    this.setState({ newsList: refreshList })
  }

  
  render() {
    console.log("props listNews",this.props.noticias);
    return (
      <>
        <h1>Noticias mas importantes del dia</h1>
        {this.paintNews()}
      </>
    );
  }
}

export default ListNews;

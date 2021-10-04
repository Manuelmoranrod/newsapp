import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props)
    this.title = React.createRef();
    this.description = React.createRef();
    this.author = React.createRef();
    this.publishedAt = React.createRef();

    this.state = {
      news:{
        title: '',
        description: '',
        author: '',
        publishedAt: ''
      }
    }
    
  }
  addProduct = (event)=>{
    event.preventDefault();

    const title = this.title.current.value 
    const description = this.description.current.value 
    const author = this.author.current.value 
    const publishedAt = this.publishedAt.current.value 

    const news = {title,description,author,publishedAt}
    //this.setState({ news })
    console.log("Form handlesubmit", news);
    this.props.passInfo(news)
  }
  
  render() {
    return (
      <form onSubmit={this.addProduct}>
        <label >
          Título:
          <input type="text" name="title" ref={this.title}/>
        </label><br />
        <label>
          Cuerpo:
          <input type="text" name="description" ref={this.description}/>
        </label><br />
        <label>
          Autor:
          <input type="text" name="author" ref={this.author}/>
        </label><br />
        <label>
          Fecha:
          <input type="date" name="publishedAt" ref={this.publishedAt}/>
        </label><br />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default Form;

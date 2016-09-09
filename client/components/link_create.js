import React, {Component} from 'react';


class LinkCreate extends Component{
  constructor(props){
    super(props);
    this.state = {error: ''};
  }

  handleSubmit(event){
    event.preventDefault(); // so it doesnt refresh

    // call the method
    Meteor.call('links.insert', this.refs.link.value,(error)=>{
      // on error, print the error on client side instead
      console.log(error);
      if(error){
        this.setState({error:'Enter valid URL'});
      }else{
        this.setState({error:''});
      }
    });
    console.log(this.refs.link.value);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input ref="link" className="form-control"/>
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;

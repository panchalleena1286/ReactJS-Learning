import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             UserName: '',
             Comments: '',
             Topic: 'react'
        }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            UserName: event.target.value
        })

    }

    handleCommentsChange = (event) => {
        this.setState({
            Comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            Topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.UserName} ${this.state.Comments} ${this.state.Topic}`)
    }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName</label>
            <input type='text' value={this.state.UserName} 
            onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.Comments}
            onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.Topic} onChange={this.handleTopicChange}>
                <option>react</option>
                <option>angular</option>
                <option>java</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
  render() {
    //if/ else
    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             welcome leena
    //         </div>
    //     )
    // }
    // else {
    //     return(
    //         <div>
    //             welcome guest
    //         </div>
    //     )
  // } 


//Element Variable
//   let message 
//   if(this.state.isLoggedIn){
//     message = <div>welcome leena</div>
//   }
//   else {
//     message = <div>welcome guest</div>
//   }
//   return <div>{message}</div>


//Turnary conditional Operator
// return (
//     this.state.isLoggedIn ?
//     <div>welcome leena</div> : 
//     <div>welcome guest</div>
// )


//Short Circuit Operator
return (
    this.state.isLoggedIn && <div>welcome leena</div>
)

}

}

export default UserGreeting
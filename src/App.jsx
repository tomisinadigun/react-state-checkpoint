import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class App extends React.Component {

  state = {

    fullname:"Cristiano Ronaldo",
    bio: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Professional League club Al Nassr and the Portugal national team",
    imgSrc: "https://starsunfolded.com/wp-content/uploads/2016/06/Cristiano-Ronaldo.jpg",
    profession: "Footballer",
    shows: true,

  }

  handleShow = () => this.setState({
    shows: false,
  })

  handleHide = () => this.setState({
    shows:true,
  })
  
  render () {
    
    return(
      <div>
        
          <div className="card-container" style={{minHeight:"520px", minWidth:"70px"}}>
            {
              this.state.shows === true ? 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.imgSrc}/>
                <Card.Body>
                  <Card.Title>{this.state.fullname}</Card.Title>
                  <Card.Text>
                    {this.state.bio}
                  </Card.Text>
                </Card.Body>
              </Card>
            : <h1>No Profile Here</h1>
            }
          </div>

        <Button style={{width:"18rem"}} variant="primary" onClick={this.state.shows===true? this.handleShow: this.handleHide}>Button</Button>
      </div>
    )
  }
}


export default App;

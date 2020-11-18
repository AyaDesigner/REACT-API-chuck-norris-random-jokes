import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



class Quotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
            quote: "Loading..." ,
            img: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
    
    
    };
        
    }

    //life cycle
    componentDidMount() {
        this.getQuotes();
    }

    getQuotes() {

        fetch('https://api.chucknorris.io/jokes/random')
            .then(objectResponse => {
                return objectResponse.json();
            })
            .then((jsonObject) => {
                console.log("this what is returning: " + jsonObject.value);
                this.setState({ quote: jsonObject.value, img: "https://media1.tenor.com/images/00ae7fd2b2acbdc7b36600c73941ec6a/tenor.gif?itemid=9540227"})
            })
            .catch(console.log)

    }


    render() {
        return (
            <div>
                <img src = {this.state.img} alt = "Chuck"></img>
                <h2>{this.state.quote}</h2>
                <Button variant="success" onClick={() => this.getQuotes()}>Chuck would click here</Button>
            </div>
        )
    }


}

export default Quotes;
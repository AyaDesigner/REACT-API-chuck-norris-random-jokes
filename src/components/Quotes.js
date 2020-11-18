import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



class Quotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
            quote: "Loading..." ,
            img: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
            imgSizeBites: 2748669
    };
        
    }

    //life cycle
    componentDidMount() {
        this.getQuotesAndImages();
    }

    getQuotesAndImages(){
        this.getQuotes();
        this.getImage();
    }

    getQuotes() {

        fetch('https://api.chucknorris.io/jokes/random')
            .then(objectResponse => {
                return objectResponse.json();
            })
            .then((jsonObject) => {
                console.log("this what is returning: " + jsonObject.value);
                this.setState({ quote: jsonObject.value})
            })
            .catch(console.log)

    }

    getImage() {

        fetch('https://random.dog/woof.json')
            .then(objectResponse => {
                return objectResponse.json();
            })
            .then((jsonObject) => {
                console.log("this what is returning img: " + jsonObject.url);
                this.setState({ img: jsonObject.url, imgSizeBites: jsonObject.fileSizeBytes})
            })
            .catch(console.log)

    }


    render() {
        return (
            <div>
                <img src = {this.state.img} alt = "Chuck"></img>
                <h2>{this.state.quote}</h2>
                <Button variant="success" onClick={() => this.getQuotesAndImages()}   >Chuck would click here</Button>
            </div>
        )
    }


}

export default Quotes;
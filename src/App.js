import React,{Component,Fragment} from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {
    
    state = {
        characters: []
    }

    render(){
        const { characters } = this.state;
        return(
            <Fragment>
                <div className = 'container'>
                    <Table 
                        characterData = {characters} 
                        removeCharacter = {this.removeCharacter}
                    />
                    <Form handleSubmit = {this.handleSubmit} />
                </div>
            </Fragment>
        );
    }

    removeCharacter = (index) => {
        const { characters } = this.state;
        this.setState({
            characters:characters.filter((character,i) => {
                return i !==index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({
            characters:[...this.state.characters,character]
        })
    }
}

export default App
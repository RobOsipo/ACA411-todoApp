import React from 'react';


class App extends React.Component {

    state = {isClicked: false, todos: [], text: ''}


    onClickHandler = () => {
        this.setState({isClicked: !this.state.isClicked })
    }


    onChangeHandler = (e) => {
        this.setState({text: e.target.value})
    }


    render() {
        console.log(this.state)
        return (
            <main>
                <button onClick={this.onClickHandler}>change state</button>
                <input onChange={this.onChangeHandler} />

            </main>
        )
    }
}


export default App;
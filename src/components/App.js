import React from 'react';


class App extends React.Component {

    state = {isClicked: false, todos: [], text: ''}


    onClickHandler = () => {
        this.setState({isClicked: !this.state.isClicked })
    }


    onChangeHandler = (e) => {
        this.setState({text: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({ todos: [...this.state.todos, this.state.text], text: '' })

        


    }

    handleDelete = (index) => {
       const filteredTodos = this.state.todos.filter((todo) => {
            return this.state.todos.indexOf(todo) !== index
        })

        this.setState({ todos: [...filteredTodos]})
    }


    render() {
        console.log(this.state)
        return (
            <main>
                <button onClick={this.onClickHandler}>change isClicked state</button>
                <p>{this.state.isClicked ? 'True' : 'False'}</p>
                <br />
                <br />
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChangeHandler} value={this.state.text} />
                    <button type="submit">Add Todo</button>
                </form>

                <ol>
                    {this.state.todos.map((todo, index) => {
                        return (
                            <>
                                {console.log(todo)}
                                <li key={index}>{todo}</li>
                                <button onClick={() => this.handleDelete(index) }>Delete</button>

                            </>
                        )
                    })}
                </ol>
            </main>
        )
    }
}


export default App;
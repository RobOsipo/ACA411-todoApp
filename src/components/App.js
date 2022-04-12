import React from 'react';
import './app.css'


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
       
        return (
            <main>
    
                <button onClick={this.onClickHandler}>change isClicked state</button>
                <p className="state-text">{this.state.isClicked ? 'True' : 'False'}</p>

                <br />
                <br />
                
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChangeHandler} value={this.state.text} />
                    <button type="submit">Add Todo</button>
                </form>

                <ol className="form">
                    {this.state.todos.map((todo, index) => {
                        
                        return (
                            <>
                                 
                                <li className="todo-text" key={index}>
                                    <input onClick={this.onClickHandler}  type="checkbox" />
                                    {todo}
                                </li>
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
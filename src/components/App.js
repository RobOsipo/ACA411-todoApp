import React from 'react';
import classes from './app.module.css'


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
    
                <button className={classes.button} onClick={this.onClickHandler}>change isClicked state</button>
                <p className={classes['state-text']}>{this.state.isClicked ? 'True' : 'False'}</p>

                <br />
                <br />
                
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <h1 className={classes['state-text']}>Time to get some shit done!</h1>
                    <input type="text" onChange={this.onChangeHandler} value={this.state.text} />
                    <button className={classes['button-diff']} type="submit">Add Todo</button>
                </form>

                <ol className={classes.form}>
                    {this.state.todos.map((todo, index) => {
                        
                        return (
                            <div className={classes.padding}>
                                 
                                <li className={classes['todo-text']} key={index}>
                                    <input onClick={this.onClickHandler}  type="checkbox" />
                                    {todo}
                                </li>
                                <button className={classes.button} onClick={() => this.handleDelete(index) }>Delete</button>

                            </div>
                        )
                    })}
                </ol>
            </main>
        )
    }
}


export default App;
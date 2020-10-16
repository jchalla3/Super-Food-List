import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
// import Clock from 'react-clock'
import notesService from '../../services/notesService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import NotepadPage from '../NotepadPage/NotepadPage'
import AddNotePage from '../../components/AddNotePage/AddNotePage';
import EditNotePage from '../../components/EditNotePage/EditNotePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const notes = await notesService.getAll();
    this.setState({ notes });
  }

  handleAddNote = async newNoteData => {
    const newNote = await notesService.create(newNoteData);
    this.setState(state => ({
      notes: [...state.notes, newNote]
    }),
      () => this.props.history.push('/'));
  }

  handleDeleteNote = async id => {
    await notesService.deleteOne(id);
    this.setState(state => ({
      notes: state.notes.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  };

  handleUpdateNote = async updatedNoteData => {
    const updatedNote = await notesService.update(updatedNoteData);
    const newNotesArray = this.state.notes.map(p =>
      p._id === updatedNote._id ? updatedNote : p
    );
    this.setState(
      { notes: newNotesArray },
      () => this.props.history.push('/')
    );
  };


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }


  render() {
    return (
      <>
        <header className="App-header">
          <Link to='/'>SuperFoods</Link>
          <nav>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          </nav>
        </header>
        <Switch>
          <Route exact path='/' render={() => (
            userService.getUser() ?
              <NotepadPage notes={this.state.notes} user={this.state.user} handleDeleteNote={this.handleDeleteNote} />
              :
              <Redirect to='/login' />
          )} />
          <Route exact path='/add' render={() => <AddNotePage handleAddNote={this.handleAddNote} />}
          />
          <Route
            exact
            path='/edit'
            render={({ location }) => (<EditNotePage
              handleUpdateNote={this.handleUpdateNote}
              location={location}
            />
            )}
          />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
        </Switch>
      </>
    );
  }
}

export default App;
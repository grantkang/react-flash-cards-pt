import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      view: 'view-cards',
      cards: []
    };
  }

  componentDidMount() {
    this.loadCards();
  }

  getView() {
    const view = this.state.view;
    switch (view) {
      case 'view-cards':
        return <ViewCards cards={this.state.cards}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'create-card':
        return <CreateCard onSubmit={this.addCard} onReset={() => this.setView('view-cards')}/>;
      default:
        return null;
    }
  }

  setView(view) {
    this.setState({view: view});
  }

  saveCards() {
    localStorage.setItem('flash-cards', JSON.stringify(this.state.cards));
  }

  loadCards() {
    this.setState({cards: JSON.parse(localStorage.getItem('flash-cards'))});
  }

  addCard(card) {
    const newCards = this.state.cards.slice();
    newCards.push(card);
    this.setState({ cards:newCards }, () => {
      this.saveCards();
    })
  }

  render() {
    return (
      <div className="container">
        <Nav
          setView={this.setView}
          currentView={this.state.view} />
        <div>
          {this.getView()}
        </div>
      </div>
    );
  }
}

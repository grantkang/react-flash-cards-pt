import React from 'react';

class Card extends React.Component {
  render() {
    const card = this.props.card;
    return (
      <div className="col mb-4">
        <div className="card">
          <div className="card-header bg-dark">
            <h5 className="card-title text-secondary">Question:</h5>
            <p className="card-text text-white">{card.question}</p>
          </div>
          <div className="card-body bg-secondary">
            <h5 className="card-title text-light">Answer:</h5>
            <p className="card-text text-white">{card.answer}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default class ViewCards extends React.Component {
  render() {
    const cardElements = this.props.cards.map(card => <Card key={card.question} card={card} />);

    return (
      <div>
        <h1 className="text-center">My Cards</h1>
        <div className="row row-cols-1 row-cols-md-3">
          {cardElements}
        </div>
      </div>
    )
  }
}

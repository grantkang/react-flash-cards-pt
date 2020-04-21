import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: 'view-cards'
    };
  }

  getView() {
    const view = this.state.view;
    switch (view) {
      case 'view-cards':
        return <ViewCards />;
      case 'review-cards':
        return <ReviewCards />;
      case 'create-card':
        return <CreateCard />;
      default:
        return null;
    }
  }

  setView(view) {
    this.setState({view: view});
  }

  render() {
    return (
      <div className="container">
        <Nav
          setView={this.setView}
          currentView={this.state.view} />
        <div className="text-center">
          {this.getView()}
        </div>
      </div>
    );
  }
}

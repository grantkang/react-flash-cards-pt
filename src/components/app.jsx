import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

function View(label, element) {
  return {
    label: label,
    element: element
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.viewMap = {
      'view-cards': { label: 'View Grades', element: <ViewCards /> },
      'review-cards': { label: 'Review', element: <ReviewCards /> },
      'create-card': { label: 'Create Card', element: <CreateCard /> }
    };
    this.state = {
      view: 'view-cards'
    };
  }

  getView() {
    const view = this.state.view;
    return this.viewMap[view].element;
  }

  setView(view) {
    this.setState({view: view});
  }

  render() {
    return (
      <div className="container">
        <Nav setView={this.setView} viewMap={this.viewMap} currentView={this.state.view}/>
        <div className="text-center">
          {this.getView()}
        </div>
      </div>
    );
  }
}

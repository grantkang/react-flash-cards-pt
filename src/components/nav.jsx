import React from 'react';

export default class Nav extends React.Component {
  render() {
    const setView = this.props.setView;
    const currentView = this.props.currentView;
    const regularClass = 'nav-link';
    const activeClass = 'nav-link active';
    return (
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
          <a
            className={currentView === 'view-cards' ? activeClass : regularClass}
            onClick={() => setView('view-cards')}
            href="#">
            View Cards
          </a>
        </li>
        <li className="nav-item">
          <a
            className={currentView === 'review-cards' ? activeClass : regularClass}
            onClick={() => setView('review-cards')}
            href="#">
            Review
          </a>
        </li>
        <li className="nav-item">
          <a
            className={currentView === 'create-card' ? activeClass : regularClass}
            onClick={() => setView('create-card')}
            href="#">
            Create Card
          </a>
        </li>
      </ul>
    )
  }
}

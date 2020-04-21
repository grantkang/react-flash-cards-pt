import React from 'react';

class NavItem extends React.Component{
  render() {
    const label = this.props.label;
    const view = this.props.view;
    const className = this.props.isActive ? 'nav-link active' : 'nav-link';
    return (
      <li className="nav-item">
        <a className={className} onClick={this.props.onClick} href="#">{label}</a>
      </li>
    );
  }
}

export default class Nav extends React.Component {
  render() {
    const setView = this.props.setView;
    const viewMap = this.props.viewMap;
    const currentView = this.props.currentView;

    return (
      <ul className="nav nav-pills justify-content-end">
        {Object.keys(viewMap).map(view => {
          return (
            <NavItem
              key={view}
              label={viewMap[view].label}
              view={view}
              isActive={view === currentView}
              onClick={() => setView(view)}
            />
          )
        })}
      </ul>
    )
  }
}

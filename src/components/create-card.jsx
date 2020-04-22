import React from 'react';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      question: '',
      answer: ''
    }
  }

  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    const newInput = {};
    newInput[key] = value;
    this.setState(newInput);
  }

  handleReset(e) {
    e.preventDefault();
    this.props.onReset();
    this.resetForm();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      question: this.state.question,
      answer: this.state.answer
    });
    this.resetForm();
  }

  resetForm() {
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">Create New Card</h1>
        <form className="col-8" onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <div className="form-group">
            <label htmlFor="questionInput">Question:</label>
            <textarea
              className="form-control"
              id="questionInput"
              name="question"
              rows="3"
              value={this.state.question}
              onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="answerInput">Answer:</label>
            <textarea
              className="form-control"
              id="answerInput"
              name="answer"
              rows="3"
              value={this.state.answer}
              onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group float-right">
            <button type="reset" className="mr-2 btn btn-outline-danger">Cancel</button>
            <button type="submit" className="ml-2 btn btn-outline-primary">Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}

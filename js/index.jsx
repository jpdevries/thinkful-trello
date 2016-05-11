var React = require('react');
var ReactDOM = require('react-dom');

var TrelloApp = React.createClass({
  getInitialState: function() {
        return {
            title: 'Knüth-Büth',
            lists: [
                {
                    title: 'Geriatric Hannibal',
                    cards: ['Hello, Clarice', 'How are you', 'Fine thanks'],
                    typed: ''
                },
                {
                    title: 'Numbers',
                    cards: ['Ein', 'Zwei', 'Drei'],
                    typed: ''
                }
            ]
            //typed: ''
          };
    },
    onChange: function(event) {
        var newTyped = this.state.lists.slice();
        newTyped[0].typed = event.target.value;

        this.setState({
            lists: newTyped
        });
    },
    onSubmit: function (event) {
        event.preventDefault();
        console.log(event);
        var newList = this.state.lists.slice();
        newList[0].cards.push(this.state.lists[0].typed);
        this.setState({
            lists: newList
        });

        this.state.typed = '';
    },
    render: function() {
      return (
        <TrelloBoard board={this.state} onSubmit={this.onSubmit} onChange={this.onChange}/>
      );
    }
});

var TrelloBoard = function(props) {
    var trelloLists = [];
    for (var i=0; i < props.board.lists.length; i++) {
      trelloLists.push(<TrelloList list={props.board.lists[i]} onSubmit={props.onSubmit} onChange={props.onChange} key={i}/>);
    }
    return (
      <div className="list">
        <h1>{props.board.title}</h1>
        {trelloLists}

      </div>
    );
};

var TrelloList = function(props) {
    var cards = [];
    for (var i = 0; i < props.list.cards.length; i += 1) {
        cards.push(<TrelloCard card={props.list.cards[i]} key = {i}/>)
    }
    return (
        <div>
          <ul>
              <h2>{props.list.title}</h2>
              {cards}
          </ul>
          <form onSubmit={props.onSubmit}>
            <Input onChange={props.onChange} />
            <Button text="Ready to be amazed?" />
          </form>
        </div>
    );
};

var TrelloCard = function(props) {
    return (
        <li className="card">
            <div className="card-image"><img src={props.image} /></div>
            <div className="card-text">{props.card}</div>
        </li>
    );
};

var Button = function(props) {
  return <button type='submit'>{props.text}</button>;
};

var Input = function(props) {
  return <input type='text' onChange={props.onChange} />
};

TrelloCard.defaultProps = {
    image: 'http://www-cs-faculty.stanford.edu/~uno/don.gif'
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <TrelloApp />, document.getElementById('app'));
});

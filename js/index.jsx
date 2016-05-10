var React = require('react');
var ReactDOM = require('react-dom');

var data = {
    title: 'Knüth-Büth',
    lists: [
        {
            title: 'Geriatric Hannibal',
            cards: ['Hello, Clarice', 'How are you', 'Fine thanks']
        },
        {
            title: 'Numbers',
            cards: ['Ein', 'Zwei', 'Drei']
        }
    ]
};

var TrelloCard = function(props) {
    //console.log(props);
    return (
        <li className="card">
            <div className="card-image"><img src={props.image} /></div>
            <div className="card-text">{props.card}</div>
        </li>
    );
};

TrelloCard.defaultProps = {
    image: 'http://www-cs-faculty.stanford.edu/~uno/don.gif'
};

var TrelloList = function(props) {
    var cards = [];
    for (var i = 0; i < 3; i += 1) {
        cards.push(<TrelloCard card={props.list.cards[i]} />)
    }
    return (
        <ul>
            <h2>{props.list.title}</h2>
            {cards}
        </ul>
    );
};

var TrelloBoard = React.createClass({
  getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
  render: function() {
    var trelloLists = [];
    for (var i=0; i < this.props.data.lists.length; i++) {
      trelloLists.push(<TrelloList list={this.props.data.lists[i]}/>);
    }
    return (
      <div className="list">
        <h1>{this.props.data.title}</h1>
        {trelloLists}

      </div>
    );

  }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <TrelloBoard data={data}/>, document.getElementById('app'));
});

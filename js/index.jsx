var React = require('react');
var ReactDOM = require('react-dom');

var data = {
    title: 'Knüth-Büth',
    lists: [
        {
            title: 'List 1 title',
            cards: ['Card 1', 'Card 2', 'Card 3']
        },
        {
            title: 'List 2 title',
            cards: ['Card 1', 'Card 2', 'Card 3']
        }
    ]
}

var TrelloCard = function(props) {
    return (
        <li className="card">
            <div className="card-image"><img src={props.image} /></div>
            <div className="card-text">{props.text}</div>
        </li>
    );
};

TrelloCard.defaultProps = {
    text: 'Hello...Clarice :)',
    image: 'http://www-cs-faculty.stanford.edu/~uno/don.gif'
};

var TrelloList = function(props) {
    // var cardArray = [TrelloCard(image, text), ]
    return (
        <ul>
            <TrelloCard/>
            <TrelloCard/>
            <TrelloCard/>
            <TrelloCard/>
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

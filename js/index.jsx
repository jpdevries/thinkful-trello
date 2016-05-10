var React = require('react');
var ReactDOM = require('react-dom');

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

var TrelloList = function() {
    return (
        <ul>
            <TrelloCard/>
            <TrelloCard/>
            <TrelloCard/>
            <TrelloCard/>
        </ul>
    );
};

var TrelloBoard = function() {
    return (
        <div>
            <TrelloList/>
            <TrelloList/>
            <TrelloList/>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <TrelloBoard/>, document.getElementById('app'));
});

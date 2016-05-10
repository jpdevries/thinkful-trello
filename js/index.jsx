var React = require('react');
var ReactDOM = require('react-dom');

var TrelloCard = function () {
    var text = 'Not Derek Zoolander';
    return (
        <li className="card">
            <div className="card-text">{text}</div>
        </li>
    );
};

var TrelloList = function () {
    return (
        <ul>
            <TrelloCard />
            <TrelloCard />
            <TrelloCard />
            <TrelloCard />
        </ul>
    );
};

var TrelloBoard = function () {
    return (
        <div>
            <TrelloList />
            <TrelloList />
            <TrelloList />
        </div>
    );
};

//var Person = React.createClass({

//    getInitialState: function() {
//        return {
//            highlight: false,
//            growIMG: false
//        };
//    },
//    onClick: function() {
//        this.setState({
//            highlight: !this.state.highlight,
//            growIMG: !this.state.growIMG
//        });
//    },
//    render: function() {
//        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
//        var growImage = 'person-img ' + (this.state.growIMG ? 'growIMG' : '');
//        return (
//            <div className={classes} onClick={this.onClick}>
//                <div className="person-name">{this.props.name}</div>
//                <img className={growImage} src={this.props.imageUrl} />
//                <div className="person-job">
//                    {this.props.job}
//                </div>
//            </div>
//        );
//    }
//});
//
//var PersonList = function() {
//    var text = 'Derek Zoolander';
//    return (
//        <div className="card">
//            <div className="card-text">{text}</div>
//        </div>
//    );
//
//};
//
//Person.defaultProps = {
//    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
//};

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <TrelloBoard />, document.getElementById('app'));
});

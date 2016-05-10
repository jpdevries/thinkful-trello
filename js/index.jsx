var React = require('react');
var ReactDOM = require('react-dom');

var Person = function(props) {
    return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageUrl}/>
            <div className="person-job">
                {props.job}
            </div>
        </div>
    );
};

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander" imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg" job="Male model"/>
            <Person name="Donald Knuth" imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif" job="Clever chap"/>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <PersonList/>, document.getElementById('app'));
});

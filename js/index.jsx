var React = require('react');
var ReactDOM = require('react-dom');

var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false,
            growIMG: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight,
            growIMG: !this.state.growIMG
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
        var growImage = 'person-img ' + (this.state.growIMG ? 'growIMG' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className={growImage} src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander" imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg" job="Male model"/>
            <Person name="Donald Knuth" imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif" job="Clever chap"/>
            <Person name="Donald Knuth" job="Clever chap"/>
        </div>
    );
};

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <PersonList/>, document.getElementById('app'));
});

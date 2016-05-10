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
            <Person name="Willy Wonka" imageUrl="https://s-media-cache-ak0.pinimg.com/favicons/758e0863abf72b9d780f8a4ef74a20496487dcdd80ca5d1d51ddd6f6.png?800153a7aff313b566d38d9e06e1ca38" job="Candy Maker/Children Killer?"/>
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

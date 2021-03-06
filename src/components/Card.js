var React = require('react');
var classNames = require('classnames');

export default React.createClass({
	displayName: 'Card',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
	},
	render () {
		var className = classNames('Card', this.props.className);

		return <div {...this.props} className={className} />;
	},
});

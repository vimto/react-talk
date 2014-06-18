/** @jsx React.DOM */

var List = React.createClass({
  render: function() {
    return (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    );
  }
});

React.renderComponent(
  <List />,
  document.getElementById('component-container')
);

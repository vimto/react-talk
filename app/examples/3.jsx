/** @jsx React.DOM */

var Elements = React.createClass({
  render: function() {
    return (
      <ol class="element-list">
        <li>Hydrogen</li>
        <li>Lithium</li>
      </ol>
    );
  }
});

React.renderComponent(
  <Elements />,
  document.getElementById('component-container')
);

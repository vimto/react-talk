/** @jsx React.DOM */

var Menu = React.createClass({
  render: function() {
    return (
      <ol class="elements">
        <li>Hydrogen</li>
        <li>Lithium</li>
        <li>Beryllium</li>
      </ol>
    );
  }
});

React.renderComponent(
  <Elements />,
  document.getElementById('component-container')
);

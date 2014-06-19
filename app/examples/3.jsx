/** @jsx React.DOM */
// The declaration actually defines a namespace for the referenced components

var Elements = React.createClass({
  render: function() {
    return (
      // We can include attributes, that are passed to the components
      <ol id="element" class="element-list">
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

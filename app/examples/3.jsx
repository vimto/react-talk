/** @jsx React.DOM */
// The declaration actually defines a namespace for the referenced components

var Elements = React.createClass({
  render: function() {
    return (
      // We can include attributes, that are passed to the components
      // The signature of a component is Component(attributes, children...)
      // It's a variadic signature, and the last n elements are treated as the children
      <ol id="element" class="element-list">
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

/** @jsx React.DOM */
// The declaration actually defines a namespace for the referenced components

var Elements = React.createClass({displayName: 'Elements',
  render: function() {
    return (
      // We can include attributes, that are passed to the components
      // The signature of a component is Component(attributes, children...)
      // It's a variadic signature, and the last n elements are treated as the children
      React.DOM.ol( {id:"element", class:"element-list"}, 
        React.DOM.li(null, "Hydrogen"),
        React.DOM.li(null, "Lithium"),
        React.DOM.li(null, "Beryllium")
      )
    );
  }
});

React.renderComponent(
  Elements(null ),
  document.getElementById('component-container')
);

/** @jsx React.DOM */
// The declaration actually defines a namespace for the referenced components

var Elements = React.createClass({displayName: 'Elements',
  render: function() {
    return (
      // We can include attributes, that are passed to the components
      React.DOM.ol( {id:"element", class:"element-list"},
        React.DOM.li(null, "Hydrogen"),
        React.DOM.li(null, "Lithium")
      )
    );
  }
});

React.renderComponent(
  Elements(null ),
  document.getElementById('component-container')
);

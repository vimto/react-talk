/** @jsx React.DOM */

var Elements = React.createClass({displayName: 'Elements',
  render: function() {
    return (
      React.DOM.ol( {class:"elements"}, 
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

var CollapsibleBody = React.createClass({
  render: function () {
    return (
      <div className="ddm-collapsible__body">
        {this.props.children}
      </div>
    );
  }
});

var CollapsibleBody = React.createClass({
  render: function () {
    return (
      <div className="ddm-collapsible__body" key="body">
        <div className="ddm-collapsible__content" ref="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});
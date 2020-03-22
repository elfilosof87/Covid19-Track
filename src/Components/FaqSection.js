import React, { Component } from "react";
import PropTypes from "prop-types";

class FaqSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <div
        style={{
          background: isOpen ? "#555555" : "#777777",
          color: "white",
          cursor: "pointer",
          padding: "25px 0px",
          width: "100%",
          margin: "0px 0px",
          border: "none",
          textAlign: "center",
          outline: "none",
          fontSize: "15px"
        }}
      >
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          {label}
          <div style={{ float: "right" }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "#fff",
              transition: "0.3s ease-in",
              color: "black",
              padding: "18px"
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default FaqSection;

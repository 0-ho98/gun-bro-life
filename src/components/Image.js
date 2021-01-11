import React from "react";
import "./Image.css";
class Image extends React.Component {
  state = {
    isModal: false,
  };
  clickImage = () => {
    this.setState({ isModal: true });
  };
  clickClose = () => {
    this.setState({ isModal: false });
  };
  render() {
    const { image, name } = this.props;
    const { isModal } = this.state;
    return (
      <div className="image-container">
        {isModal ? (
          <div className="modal">
            <div className="inside-content">
              <img src={image} alt={name} title={name} />
            </div>
            <button onClick={this.clickClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        ) : (
          <img onClick={this.clickImage} src={image} alt={name} title={name} />
        )}
      </div>
    );
  }
}
export default Image;

import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate(nextProps) {
    let modal = $(`.modal-${nextProps.modalName}`);
    if (nextProps.isOpen) {
      modal.css('display', 'block');
      $('body').css('overflow', 'hidden');
    } else {
      modal.css('display', 'none');
      $('body').css('overflow', 'auto');
    }
  }

  componentDidMount() {
    let modal = $('.modal-overlay');
    $('body').prepend(modal);
    $('.modal-wrapper').empty();
    modal.css('display', 'none');
  }

  componentWillUnmount() {
    let modal = $(`.modal-${this.props.modalName}`);
    modal.remove();
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className={`modal-overlay modal-${this.props.modalName}`} onClick={this.handleClick}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Modal;

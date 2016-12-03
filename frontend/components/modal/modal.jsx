import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isOpen) {
      $(`.modal-${nextProps.modalName}`).css('display', 'block');
      $('body').css('overflow', 'hidden');
    } else {
      $(`.modal-${nextProps.modalName}`).css('display', 'none');
      $('body').css('overflow', 'auto');
    }
  }

  componentDidMount() {
    let modal = $('.modal-overlay');
    $('body').prepend(modal);
    $('.modal-wrapper').empty();
    modal.css('display', 'none');
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

import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate(nextProps) {
    const {modalName, isOpen} = nextProps;
    const wasOpen = this.props.isOpen;
    let modal = $(`.modal-${modalName}`);
    if (isOpen) {
      $('body').css('overflow', 'hidden');
      modal.css('display', 'block');
    } else if (wasOpen && !isOpen){
      $('body').css('overflow', 'auto');
      modal.css('display', 'none');
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
    $('body').css('overflow', 'auto');
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

import React from 'react';
import { stores } from 'sdk';

class Img extends React.Component {
  static defaultProps = {
    ContextStore: stores.ContextStore.getState()
  }

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    ContextStore: React.PropTypes.object.isRequired
  }

  getBaseUrl() {
    let accountName = this.props.ContextStore.get('accountName');
    return `http://${accountName}.vteximg.com.br`;
  }

  render() {
    let path = this.props.src.replace('#width#', this.props.width).replace('#height#', this.props.width);
    path = this.getBaseUrl(this.props) + path;

    return (
      <img
        className={this.props.className}
        src={path}
        alt={this.props.alt}
        title={this.props.title} />
    );
  }
}

export default Img;

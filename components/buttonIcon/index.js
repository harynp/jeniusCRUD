import React, { Component } from "react";
import { Button, Icon } from "native-base";

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { block, onPress, iconName, danger } = this.props;
    return (
      <Button danger={danger} block={block} onPress={onPress}>
        <Icon name={iconName} />
      </Button>
    );
  }
}

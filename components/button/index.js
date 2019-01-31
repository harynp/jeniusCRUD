import React, { Component } from "react";
import { Button, Text } from "native-base";
import { TextButtonStyle, ContainerButton } from "./style";
export default class ButtonIconComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { block, danger, primary, text, onPress, color } = this.props;
    return (
      <Button
        block={block}
        onPress={onPress}
        color={color}
        primary={primary}
        danger={danger}
        style={ContainerButton}
      >
        <Text style={TextButtonStyle}> {text} </Text>
      </Button>
    );
  }
}

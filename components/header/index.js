import React, { Component } from "react";
import { Header, Body, Title } from "native-base";
import { TitleStyle } from "./style";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title } = this.props;
    return (
      <Header>
        <Body>
          <Title style={TitleStyle}>{title}</Title>
        </Body>
      </Header>
    );
  }
}

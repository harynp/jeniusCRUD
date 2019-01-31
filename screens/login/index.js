import React, { Component } from "react";
import { View } from "react-native";
import { Container, Item, Form, Input } from "native-base";
import Header from "../../components/header";
import Button from "../../components/button";
import { ViewStyle } from "./style";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      dataUser: {}
    };
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  getDataFromAPI = () => {
    return fetch("https://reqres.in/api/login")
      .then(({ _bodyInit }) => {
        const value = _bodyInit;
        this.setState({
          dataUser: value
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  onChangeUsername = text => {
    const usernameValue = text;
    this.setState({
      username: usernameValue
    });
  };

  onChangePassword = text => {
    const passwordValue = text;
    this.setState({
      password: passwordValue
    });
  };

  handleLogin = () => {
    const { dataUser, username } = this.state;
    const { navigation } = this.props;
    const UserData = JSON.parse(dataUser);
    UserData.data.map(listName => {
      const usernameFromAPI = listName.name;
      if (usernameFromAPI === username) {
        navigation.navigate("Dashboard", {});
      }
    });
  };

  render() {
    return (
      <Container>
        <Header title="Log In" />
        <View style={ViewStyle}>
          <Form>
            <Item>
              <Input
                onChangeText={text => this.onChangeUsername(text)}
                placeholder="Username"
              />
            </Item>
            <Item>
              <Input
                onChangeText={text => this.onChangePassword(text)}
                placeholder="Password"
              />
            </Item>
          </Form>
        </View>
        <View>
          <Button block text="LOGIN" onPress={this.handleLogin} primary />
        </View>
      </Container>
    );
  }
}

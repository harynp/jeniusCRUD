import React, { Component } from "react";
import { View } from "react-native";
import { Container, Form, Item, Input } from "native-base";
import Header from "../../components/header";
import Button from "../../components/button";
import { ViewStyle } from "./style";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: ""
    };
  }

  onChangeName = text => {
    const nameValue = text;
    this.setState({
      name: nameValue
    });
  };

  onChangeJob = text => {
    const jobValue = text;
    this.setState({
      job: jobValue
    });
  };

  handleAdd = () => {
    const { name, job } = this.state;
    const { navigation } = this.props;
    const nameSplit = name.split(" ");
    const first_name = nameSplit[0];
    const last_name = nameSplit[1];
    fetch("https://reqres.in/api/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        job: job
      })
    })
      .then(() => navigation.navigate("Dashboard"))
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <Container>
        <Header title="ADD" />
        <View style={{ margin: 10 }}>
          <Form>
            <Item>
              <Input
                onChangeText={text => this.onChangeName(text)}
                placeholder="Name"
              />
            </Item>
            <Item>
              <Input
                onChangeText={text => this.onChangeJob(text)}
                placeholder="Job"
              />
            </Item>
          </Form>
        </View>
        <View>
          <Button block primary onPress={this.handleAdd} text="ADD" />
        </View>
      </Container>
    );
  }
}

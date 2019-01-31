import React, { Component } from "react";
import { View } from "react-native";
import { Container, Form, Item, Input } from "native-base";
import Header from "../../components/header";
import Button from "../../components/button";
import { ViewStyle } from "./style";
export default class Upgrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderNm: "",
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

  handleUpdate = selectedUser => {
    const { navigation } = this.props;
    const { name, job } = this.state;
    const nameSplit = name.split(" ");
    const first_name = nameSplit[0];
    const last_name = nameSplit[1];
    fetch(`https://reqres.in/api/users/${selectedUser.id}`, {
      method: "PUT",
      mode: "no-cors",
      cache: "no-cache",
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

  handleDelete = id => {
    const { navigation } = this.props;
    fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then(() => navigation.navigate("Dashboard"))
      .catch(error => {
        console.error(error);
      });
  };

  _focusInput = inputField => {
    inputField._root.focus();
  };

  render() {
    const { navigation } = this.props;
    const { selectedUser, fullname } = navigation.state.params;
    return (
      <Container>
        <Header title="VIEW" />
        <View style={ViewStyle}>
          <Form>
            <Item>
              <Input
                autoCapitalize="none"
                onChangeText={textName => this.onChangeName(textName)}
                onSubmitEditing={() => {
                  this.refs._root.textName.focus();
                }}
                placeholder={fullname}
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
          <Button
            block
            primary
            onPress={() => this.handleUpdate(selectedUser)}
            text="UPDATE"
          />
          <Button
            block
            text="DELETE"
            danger
            onPress={() => this.handleDelete(selectedUser.id)}
          />
        </View>
      </Container>
    );
  }
}

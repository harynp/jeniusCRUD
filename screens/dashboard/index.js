import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon
} from "native-base";
import Header from "../../components/header";
import ButtonIcon from "../../components/buttonIcon";
import { TouchableStyle } from "./style";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: {}
    };
  }

  componentDidMount() {
    this.getAllListFromAPI();
  }

  getAllListFromAPI = () => {
    return fetch("https://reqres.in/api/users?page={}")
      .then(({ _bodyInit }) => {
        const value = JSON.parse(_bodyInit);
        this.setState({
          listUser: value
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  goToRegisterScreens = () => {
    const { navigation } = this.props;
    navigation.navigate("Register", {});
  };

  goToUpgradeScreens = (list, index) => {
    const selectedList = list;
    const { navigation } = this.props;
    navigation.navigate("Upgrade", {
      selectedUser: selectedList,
      fullname: selectedList.first_name + " " + selectedList.last_name
    });
  };

  render() {
    const { listUser } = this.state;
    return (
      <Container>
        <Header title="User List" />
        <Content>
          {listUser.data ? (
            listUser.data.map((list, index) => {
              return (
                <List key={index}>
                  <ListItem
                    button
                    onPress={() => this.goToUpgradeScreens(list, index)}
                  >
                    <Left>
                      <Thumbnail source={{ uri: list.avatar }} />
                    </Left>
                    <Body>
                      <Text>{list.first_name + " " + list.last_name}</Text>
                      <Text note>
                        Doing what you like will always keep you happy . .
                      </Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
              );
            })
          ) : (
            <List />
          )}

          <TouchableOpacity style={TouchableStyle}>
            <ButtonIcon
              danger
              iconName="add"
              onPress={this.goToRegisterScreens}
            />
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

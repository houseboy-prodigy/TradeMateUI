import React, { Component, ReactNode } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

interface ContentTextProps {
  textStyle: object; // Adjust the type according to your actual style type
  children: ReactNode;
}

class ContentText extends Component<ContentTextProps> {
  render() {
    return (
      <Text style={this.props.textStyle}>
        {this.props.children}
      </Text>
    );
  }
}

interface HeaderProps {
  headingStyle: object; // Adjust the type according to your actual style type
  headingStyleL: object; // Adjust the type according to your actual style type
  title: string;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <View style={this.props.headingStyle}>
        <ContentText textStyle={styles.headingText}>
          {this.props.title}
        </ContentText>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'lightgrey',
  },
  heading: {
    //flex: 0,
    alignItems: 'center',
    margin: 5,
    padding: 100,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default Header;

import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { View, Button, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <Menu inverted>
      <View style={styles.container}>
        &nbsp;
        <Link to='/'>
          <Button title='Home'/>
        </Link>
        &nbsp;
        <Link to='/films'>
          <Button title='films' />
        </Link>
        &nbsp;
        <Link to='/people'>
          <Button title='people' />
        </Link>
        &nbsp;       
        <Link to='/planets'>
          <Button title='planets' />
        </Link>
        &nbsp;
        <Link to='/species'>
          <Button title='species' />
        </Link>
        &nbsp;
        <Link to='/starships'>
          <Button title='starships' />
        </Link>
        &nbsp;
        <Link to='/vehicles'>
          <Button title='vehicles' />
        </Link>
        &nbsp;
      </View>
    </Menu>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
});
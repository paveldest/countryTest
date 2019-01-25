import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import {
  Header,
  Text,
  List,
  ListItem
} from 'react-native-elements'

import {
  array,
  object
} from 'prop-types'

class CountryDetails extends Component {
  static propTypes = {
    countries: array,
    navigation: object
  }
  
  componentDidMount() {
    // fetch full info for country border ....
  }

  render() {
    const { navigation, countries } = this.props
    const { id } = navigation.state.params

    const country = countries.find(c => c.alpha3Code === id) // find country by alpha3Code
    const borders = country.borders.map((border) => { // build borders country native name list
      const _country = countries.find(c => c.alpha3Code === border) || {}
      return _country.nativeName
    })

    return (
      <View>
        <Header
          centerComponent={(<Text h4>{country.nativeName}</Text>)}
          leftComponent={{
            icon: 'keyboard-arrow-left',
            color: '#FFF',
            size: 36,
            onPress: () => navigation.goBack(null)
          }}
        />
        <ScrollView>
          <List>
            {
              borders.map(c => (
                <ListItem
                  roundAvatar
                  key={c}
                  title={c}
                  rightIcon={<View />}
                />
              ))
            }
          </List>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ country }) => ({
  countries: country.countries
})

export default connect(mapStateToProps, {})(CountryDetails)

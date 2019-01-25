import React, { Component } from 'react'
import {
  ScrollView,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { array, func, object } from 'prop-types'
import {
  List,
  ListItem,
  Header,
  Text
} from 'react-native-elements'

import CountryAction from '../../stores/modules/country'

class CountryList extends Component {
  static propTypes = {
    countries: array,
    navigation: object,
    getCountryList: func
  }
  
  componentDidMount() {
    const { getCountryList } = this.props
    // Make call for api
    getCountryList('all?fields=nativeName;borders;alpha3Code')
  }
  
  render() {
    const { countries, navigation } = this.props

    return (
      <View>
        <Header
          centerComponent={(<Text h4>Countries</Text>)}
        />
        <ScrollView>
          <List>
            {
              countries.map(c => (
                <ListItem
                  roundAvatar
                  key={c.alpha3Code}
                  title={c.nativeName}
                  onPress={() => navigation.navigate('CountryDetails', { id: c.alpha3Code })}
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
  countries: country.countries,
  fetch: country.fetch
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCountryList: CountryAction.countryListRequest
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CountryList)

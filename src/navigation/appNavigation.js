import { createStackNavigator } from 'react-navigation'
import { CountryList, CountryDetails } from '../screens'

const createRootNavigator = () => createStackNavigator(
  {
    CountryList: { screen: CountryList },
    CountryDetails: { screen: CountryDetails }
  },
  {
    headerMode: 'none',
    initialRouteName: 'CountryList'
  }
)

export default createRootNavigator

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { EditMeal } from '@screens/EditMeal'
import { Feedback } from '@screens/Feedback'
import { Statistics } from '@screens/Statistics'
import { MealDetails } from '@screens/MealDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="statistics" component={Statistics} />

      <Screen name="new" component={NewMeal} />

      <Screen name="edit/:id" component={EditMeal} />

      <Screen name="details/:id" component={MealDetails} />

      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}

import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  HomeScreen,
  CreateEmployee,
  Livre
} from './src/screens'
import Contactus from './src/screens/Contactus'

const Stack = createStackNavigator()
const myOptions = {
  headerTintColor:"white",
            headerStyle:{
              backgroundColor:"#006aff"
            }

}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{ 
            headerShown: true,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} 
          options={{...myOptions,title:"Bienvenue"}}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} 
          options={{...myOptions,title:"Connexion"}}/>
          <Stack.Screen
           name="RegisterScreen" component={RegisterScreen}
           options={{...myOptions,title:"Inscription"}} />
          <Stack.Screen name="Dashboard" component={Dashboard}
          options={{...myOptions,title:"Nos services"}} />
          <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{...myOptions,title:"Acceuil",
            
            
          }}  />
          <Stack.Screen name="Contactus" component={Contactus}
          options={{...myOptions,title:"Contactez-nous"}} />
          <Stack.Screen name="CreateEmployee" component={CreateEmployee}
          options={{...myOptions,title:"Option livre"}} />
          <Stack.Screen name="Livre" component={Livre}
          options={{...myOptions,title:"Informations livre"}} />
          
          
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator> 
      </NavigationContainer>
    </Provider>
  )
}

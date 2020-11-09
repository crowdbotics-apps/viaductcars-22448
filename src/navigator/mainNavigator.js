import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps169979Navigator from '../features/Maps169979/navigator';
import UserProfile169975Navigator from '../features/UserProfile169975/navigator';
import BlankScreen0169949Navigator from '../features/BlankScreen0169949/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps169979: { screen: Maps169979Navigator },
UserProfile169975: { screen: UserProfile169975Navigator },
BlankScreen0169949: { screen: BlankScreen0169949Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

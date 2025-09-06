import {createDrawerNavigator} from '@react-navigation/drawer'
import { Skill } from '../screens/Skill/Skill';
import { Main } from '../screens/Main/Main';



const {Navigator, Screen} = createDrawerNavigator();

export function  DrawerRoutes(){
    return(
        <Navigator>
            <Screen name='Main' component={Main}/>
            <Screen name='Skills' component={Skill}/>
        </Navigator>
    )

}
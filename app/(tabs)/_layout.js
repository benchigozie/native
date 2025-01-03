import { Tabs } from "expo-router";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const TabsLayout = () => {

    const {userToken} = useContext(AuthContext);
    
    




 //  if (userToken == null) {
 //  return <Redirect href={'../'}/>
  
  //  }

    return (
        <Tabs>
            <Tabs.Screen name="index"  options={{
                headerShown: false,
                title: 'Home',

            }} />
            <Tabs.Screen name="me"  options={{
                headerShown: false,
                title: 'Me',

            }} />
            <Tabs.Screen name="users"  options={{
                headerShown: false,
                title: 'users',
                
            }} />
             <Tabs.Screen name="notifications"  options={{
                headerShown: false,
                title: 'notifications',
                
            }} />
        </Tabs>
    )
};

export default TabsLayout;


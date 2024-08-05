import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { TabBar } from 'react-native-tab-view/src/TabBar';
import Upcoming from '../Screens.js/Appointment/Upcoming';
import Rejected from '../Screens.js/Appointment/Rejected';
import Request from '../Screens.js/Appointment/Request';
import Completed from '../Screens.js/Appointment/Completed';

const renderScene = SceneMap({
  first: Request,
  second: Upcoming,
  third: Completed,
  fourth: Rejected,
});

const Tabview=()=> {
 
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Requests' },
    { key: 'second', title: 'Upcoming' },
    { key: 'third', title: 'Completed' },
    { key: 'fourth', title: 'Rejected' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
       renderTabBar={Tabbar}       
    />
    

   
  );

}

const Tabbar =(props)=>(
  <TabBar
  {...props}
  indicatorStyle={{ backgroundColor: 'orange',}}
  style={{ backgroundColor: '#FFFFFF' ,}}
  labelStyle={{color:'#7B7D82',fontSize:12}}
  pressColor='orange'
  tabStyle={{borderRightWidth:1,borderRightColor:'#E6E6E6',}}
 
 />
)

export default Tabview


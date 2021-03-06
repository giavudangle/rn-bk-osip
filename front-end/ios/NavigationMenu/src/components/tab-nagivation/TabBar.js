import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const S = StyleSheet.create({
  container: { flexDirection: "row", height: 52, elevation: 2 },
  tabButton: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  }
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation, 
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;
  var currentRouteName = props.navigation.state.routes[props.navigation.state.index].key

  console.log(currentRouteName);
  return (
    <View style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            <View style={{
               borderTopColor: isRouteActive ? 'red' : 'white',
               borderTopWidth: 1,
               justifyContent: "center", 
               alignItems: "center", 
            }}>
              {renderIcon({ route, focused: isRouteActive, tintColor })}

              <Text style={{fontSize: 10}}>{getLabelText({ route })}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

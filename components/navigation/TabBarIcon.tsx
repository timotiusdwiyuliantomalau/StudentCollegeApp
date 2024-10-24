// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Icon from "react-native-vector-icons/FontAwesome";

export function TabBarIcon({ ...rest }) {
  return <Icon name={rest.name} size={25} color={rest.color} />;
}

import { View,Text,Button } from "react-native";
import { styles } from "../assets/styles/styles";

export default function Contacts({route}){
    //para destructurar sin destructuras es el email y estructutado el phone
    const {email,phone} = route.params
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Estamos en contactenos</Text>
        <Text>Email: {route.params.email}</Text>
        <Text>Telefono : {phone}</Text>
      </View>
    )
  }


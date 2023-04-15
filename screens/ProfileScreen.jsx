import { View,Text,Button } from "react-native";
import { styles } from "../assets/styles/styles";

export default function ProfileScreen({navigation}){
    let email = "cosas@gmail.com";
    let phone = "30228360";
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en el perfil del usuario</Text>
        <Button title='Contactenos'
        onPress={() =>{
            navigation.navigate('Contacts',{email:email, phone:phone})
        }}/>
      </View>
    );
  }
  

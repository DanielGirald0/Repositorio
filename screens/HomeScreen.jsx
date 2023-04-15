import { View,Text,Button } from "react-native";
import { styles } from "../assets/styles/styles";

export default function HomeScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en inicio</Text>
        <Button title='Ir al perfil del usuario'
        onPress={() =>{
          navigation.navigate('Profile')
        }}/>
      </View>
    );
  }


import React, {useState} from 'react'
import{Text, View, TextInput, Button} from 'react-native'

export default ()=> {
const[nota1, setNota1] = useState("");
const[nota2, setNota2] = useState("");

  return(
<View style={{backgroundColor: '#3A6EA5',
    flex: 1, justifyContent: 'center',
    alignItems:"center",}} >
  <Text style={{color: 'white', talignItems: 'top', margin: 5, fontSize: 30, paddingBottom: 45}}>Calculo Media</Text>
  <Text style={{color: 'white', margin: 5}}>Informe a primeira nota</Text>
  <TextInput value={nota1} onChangeText={setNota1} style={{borderWidth: 1, margin: 15, textAlign:'center', borderRadius: 10, width: 80}}/>
  <Text style={{color: 'white',}}>Informe a segundo nota</Text>
  
  <TextInput value={nota2} onChangeText={setNota2} style={{borderWidth: 1, margin: 15, marginBottom: 45, textAlign:'center', borderRadius: 10, width: 80}}/>

  <Button title='calcular' onPress={()=>{
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const m = (n1 + n2) / 2;
    alert ("Media: " + m)
  }}/>
</View>
  );
}
import { Text, View ,TextInput,Image,TouchableOpacity} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Started() {
  const route=useRouter();
  const [name, setName] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <View style={{flex:1,justifyContent:'flex-end'}}>
        <Text style={{color:'#8353E2',fontSize:24,fontWeight:700,width:200,textAlign:'center'}}>MANAGE YOUR TASK</Text>
    </View>
      <View style={{flex:1,width:'100%',position:'relative',alignItems:'center',justifyContent:'center',paddingHorizontal:20}}>
        <Image style={{position:'absolute',top:107,left:26}} source={require('../images/Frame.png')}></Image>
        <TextInput placeholder="Enter your name" value={name}
          onChangeText={setName}
           style={{width:'100%',borderWidth:1,paddingVertical:10,paddingHorizontal:30,borderRadius:10,borderColor:'gray',color:'gray'}}></TextInput>
      </View>
      <View style={{flex:2,width:'100%',position:'relative',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>
          route.push({pathname:"/component/todoList",params: { name }})
        }
         style={{backgroundColor:'#00BDD6',width:200,alignItems:'center',paddingVertical:10,borderRadius:10,}}><Text style={{color:'white'}}>GET STARTED -></Text></TouchableOpacity>
      </View>
    </View>
  );
}

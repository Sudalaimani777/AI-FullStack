import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const Index = () => {

  const [text, setText] = useState("");

  // Recommended: Use onChangeText (No complex event typing required)
  const handleChange = (e:string)  => {
    // const { value } = e.target;
    setText(e);
  }

  return (
    <>
      <View>
        <Text style={{
          backgroundColor: "red"
        }}>
          Hii bro
        </Text>

        {/* Text Input */}
        <TextInput
          placeholder="Enter the name"
          value={text}
          onChangeText={handleChange}
        />
      </View>
    </>
  )
}

export default Index;

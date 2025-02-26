import React from "react"
import {View, Text, TextInput, Button} from "react-native"

export default function Form (){
    return (
        <view>
            <View>
                <text>Altura</text>
                    <TextInput
                        placeholder ="Ex. 1.90"
                        keyboardtype = "numeric"
                    />
                <text>Peso</text>
                    <TextInput
                    placeholder ="Ex. 75.200kg"
                    keyboardtype = "numeric"
                    />
                    <Button title = "Calculo de IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </view>
    )
}
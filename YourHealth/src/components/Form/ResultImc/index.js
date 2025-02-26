import React from "react"
import {view, Text} from "react-native"

export default function ResultImc (props){
    return (
        <view>
            <Text>{props.ResultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </view>
    ) ;
}
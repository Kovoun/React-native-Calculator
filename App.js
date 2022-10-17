import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import calculate, { loadingState } from './util/calculator';

export default class App extends Component {

  state = loadingState;
  
  clickHandler = (type, value) => {
    this.setState((state) => calculate(type, value, state))
  }
    render() {
        return (
            <View className=" flex-1 justify-end bg-[#222222]">
            <SafeAreaView>
                <Text className="text-white text-2xl text-right mr-5 mb-2.5 opacity-[.3]">
                    {parseFloat(this.state.previousValue).toLocaleString()}
                </Text>
                <Text className="text-white text-4xl text-right mr-5 mb-2.5">
                {parseFloat(this.state.basicValue).toLocaleString()}
                </Text>

                <View className=" flex-row">
                    <TouchableOpacity onPress={() => this.clickHandler("clear")} className="bg-[#A8A8A8] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">C</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("posneg")} className="bg-[#A8A8A8] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">+/-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("percentage")} className="bg-[#A8A8A8] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("operator", "/")} className="bg-[#edb91e] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">/</Text>
                    </TouchableOpacity>
                </View> 

                <View className=" flex-row">
                    <TouchableOpacity onPress={() => this.clickHandler("number", 7)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("number", 8)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("number", 9)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("operator", "*")} className="bg-[#edb91e] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">x</Text>
                    </TouchableOpacity>
                </View> 

                <View className=" flex-row">
                    <TouchableOpacity onPress={() => this.clickHandler("number", 4)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("number", 5)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("number", 6)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("operator", "-")} className="bg-[#edb91e] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">-</Text>
                    </TouchableOpacity>
                </View>

                <View className=" flex-row">
                    <TouchableOpacity onPress={() => this.clickHandler("number", 1)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("number", 2)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("number", 3)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("operator", "+")} className="bg-[#edb91e] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">+</Text>
                    </TouchableOpacity>
                </View> 

                <View className=" flex-row">
                    <TouchableOpacity onPress={() => this.clickHandler("number", 0)} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("number", ".")} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.clickHandler("equal", "=")} className="bg-[#333333] flex-1 items-center justify-center rounded-full m-[5px] h-[84px]">
                        <Text className="text-[24px] text-white">=</Text>
                    </TouchableOpacity>
                </View> 

                



            </SafeAreaView>
        </View>
        )
    }
}



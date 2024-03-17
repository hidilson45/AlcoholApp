import React from "react";
import {View, Text, TextInput, Image, Dimensions, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Home(){
    const screenWidth = Dimensions.get('window').width;
    const data =[
        {
            id:"1",
            name:"Regal",
            imageUrl:require('../../assets/chivas.jpeg')
        },
        {
            id:"2",
            name:"Beer",
            imageUrl:require('../../assets/beer.png')
        },
        {
            id:"3",
            name:"Whisky",
            imageUrl:require('../../assets/label.png')
        },
        {
            id:"4",
            name:"Wine",
            imageUrl:require('../../assets/wine.jpeg')
        },
        {
            id:"5",
            name:"Sparkle",
            imageUrl:require('../../assets/champagne.jpeg')
        },
    ];

    const renderItems = ({index,item}) => {
        return (
            <View className='py-4'>
                    <View className='w-[80px] justify-center items-center rounded-lg border bg-white border-slate-400'>
                        <Image style={{height:100, width:50}} source={item.imageUrl}/>
                        <Text className='font-semibold py-1 text-sm'>{item.name}</Text>
                    </View>
                </View>
        )
    }
    return(
        <View>
            <View className="mt-4 flex-row items-center py-2">
                <Ionicons name="location" color='gray' size={32}></Ionicons>
                <View className="ml-3">
                    <Text>ETREGAR EM</Text>
                    <Text className="font-semibold text-lg">Casa - Maputo</Text>
                </View>
            </View>

            <View>
                <View className="my-4">
                    <TextInput placeholder="Pesquisa por bebidas " className="p-4 rounded-2xl shadow-2xl border border-slate-300"/>
                </View>
            </View>

            <View className='flex-row'>
                <View className="relative">
                    <Image source={require('../../assets/wine.jpg')} style={{height:120, width:350, borderRadius:15}}/>
                </View>
            </View>

            <View className='my-4'>
                <View className="flex-row justify-between items-center">
                    <Text className="text-2xl font-bold">Explore Categorias</Text>
                    <TouchableOpacity>
                        <Text className="text-[#46DE99] font-bold">Ver tudo</Text>
                    </TouchableOpacity>
                </View>
                <FlatList contentContainerStyle={{gap:15}} horizontal={true} key={(item)=>item.id} data={data} renderItem={renderItems}/>
            </View>

            <View style={{height:'38%',}}>
                <Text className='font-bold text-2xl py-2'>Populares</Text>
                <ScrollView className='gap-x-4'>
                    <View className='flex-row items-center border border-slate-300 rounded-2xl py-2 my-2'>
                        <Image style={{height:70, width:50}} source={require('../../assets/2m.jpeg')}/>
                        <View>
                            <Text className='font-bold pb-1 text-xl'>Cerveja 2M Lata</Text>
                            <Text className='text-gray-500 text-sm'>330ml Can | 5%</Text>
                            <Text className='text-xl font-bold text-[#46DE99]'>MZN 60</Text>
                        </View>
                    </View>

                    <View className='flex-row items-center border border-slate-300 rounded-2xl py-2 my-2'>
                        <Image style={{height:70, width:50}} source={require('../../assets/hein.jpeg')}/>
                        <View>
                            <Text className='font-bold pb-1 text-xl'>Heineken Lata</Text>
                            <Text className='text-gray-500 text-sm'>330ml Can | 5%</Text>
                            <Text className='text-xl font-bold text-[#46DE99]'>MZN 60</Text>
                        </View>
                    </View>

                    <View className='flex-row items-center border border-slate-300 rounded-2xl py-2 my-2'>
                        <Image style={{height:70, width:50}} source={require('../../assets/brutal.jpeg')}/>
                        <View>
                            <Text className='font-bold pb-1 text-xl'>Brutal Fruit</Text>
                            <Text className='text-gray-500 text-sm'>330ml Can | 5%</Text>
                            <Text className='text-xl font-bold text-[#46DE99]'>MZN 60</Text>
                        </View>
                    </View>

                    <View className='flex-row items-center border border-slate-300 rounded-2xl py-2 my-2'>
                        <Image style={{height:70, width:50}} source={require('../../assets/beer.png')}/>
                        <View>
                            <Text className='font-bold pb-1 text-xl'>Cerveja 2M Lata</Text>
                            <Text className='text-gray-500 text-sm'>330ml Can | 5%</Text>
                            <Text className='text-xl font-bold text-[#46DE99]'>MZN 60</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

import { View, Text, Image } from 'react-native'
import React from 'react'

interface TabIconProps {
    focused: boolean;
    icon: any;
    title: string;
}

export const TabIcon = ({ focused, icon, title }: TabIconProps) => {
    return (
        <View className='flex-1 mt-3 flex flex-col items-center'>
            <Image source={icon} tintColor={focused ? '#0061ff' : '#666876'} resizeMode='contain' className='size-6' />
            <Text className={`text-xs w-full text-center mt-1 ${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'}`}>{title}</Text>
        </View>
    )
}


import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants';
import { TextInput } from 'react-native-gesture-handler';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passInput, setPassInput] = useState('');

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: "",
                }}
            />
            <View style={{ paddingHorizontal: 20, paddingTop: 100, paddingBottom: 20 }}>
                <Text style={{ fontWeight: '900', fontSize: 32 }}>Welcome to JobLinx</Text>
                <Text style={{ fontSize: 18, color: COLORS.gray }}>Find the perfect job for you!</Text>
            </View>

            <View style={{ paddingHorizontal: 20, marginTop: 50}}>
                <TextInput 
                style={{ 
                    width: "100%", 
                    height: 50, 
                    backgroundColor: COLORS.white, 
                    paddingHorizontal: 20, 
                    borderWidth: 1, 
                    borderColor: COLORS.gray2, 
                    borderRadius: 10,
                    marginBottom: 20
                }} 
                placeholder='Enter username or email'/>

                <TextInput 
                style={{ 
                    width: "100%", 
                    height: 50, 
                    backgroundColor: COLORS.white, 
                    paddingHorizontal: 20, 
                    borderWidth: 1, 
                    borderColor: COLORS.gray2, 
                    borderRadius: 10,
                    marginBottom: 50
                }} 
                placeholder='Enter password'/>
            </View>    

            <View style={{ paddingHorizontal: 20 }}>
                <TouchableOpacity style={{ width: "100%", height: 50, backgroundColor: COLORS.primary, borderRadius: 10 }} onPress={() => {}}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: COLORS.white, height: "100%" }}>
                        Sign in to our platform
                    </Text>
                </TouchableOpacity>
            </View>
        
        </SafeAreaView>
    );
};

export default Home;
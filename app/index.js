import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, FlatList, useWindowDimensions, Animated } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { TextInput } from 'react-native-gesture-handler';

import search_vector from '../assets/images/search_vector.png'
import share_vector from '../assets/images/search_vector.png'
import save_vector from '../assets/images/search_vector.png'


const slideContents = [
    {
        id: 0,
        title: "Find jobs easily",
        description: "Browse through a lot of job opportunities from various job posting platforms",
        vector_image: search_vector,
    },
    {
        id: 1,
        title: "Share with friends",
        description: "Browse through a lot of job opportunities from various job posting platforms",
        vector_image: share_vector
    },
    {
        id: 2,
        title: "Save jobs that you like",
        description: "Browse through a lot of job opportunities from various job posting platforms",
        vector_image: save_vector
    },
];

const Paginator = ({ data, scrollX}) => {
    const { width } = useWindowDimensions();

    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            { data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })
                return <Animated.View style={[{ height: 10, borderRadius: 5, backgroundColor: COLORS.primary, marginHorizontal: 8}, {width: dotWidth, opacity}]} key={i.toString()}/>
            }) }
        </View>
    );
};

const OnBoardingSlide = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}, { width }]}>
            <Text style={{fontWeight: 'bold', fontSize: 32, marginBottom: 20}}>
                {item.title}
            </Text>
            <Image
                style={{ width: 320, height: 200 }}
                source={item.vector_image}
                resizeMode='contain'
            />
            <Text style={{textAlign: 'center', width: "60%"}}>
                {item.description}
            </Text>
            
        </View>
    );
};

const OnBoarding = () => {
    const router = useRouter();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{ headerShown: false }} />

            <FlatList 
                data={slideContents}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <OnBoardingSlide item={item} />}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], { useNativeDriver: false })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Paginator data={slideContents} scrollX={scrollX}/>
            </View>

        </SafeAreaView>
    );
};

export default OnBoarding;
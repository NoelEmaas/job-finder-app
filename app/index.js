import { Text, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Onboarding from 'react-native-onboarding-swiper';
import { COLORS } from '../constants';

const slideContents = [
    {
        backgroundColor: COLORS.lightWhite,
        image: <Image source={require('../assets/images/search_job.png')} style={{ width: 280, height: 200 }}/>,
        title: <Text style={{ fontWeight: 'bold', fontSize: 32, marginBottom: 10 }}>Find jobs easily</Text>,
        subtitle: 'Browse through a lot of job opportunities from various job posting platforms',
    },
    {
        backgroundColor: COLORS.lightWhite,
        image: <Image source={require('../assets/images/share_job.png')} style={{ width: 300, height: 200 }}/>,
        title: <Text style={{ fontWeight: 'bold', fontSize: 32, marginBottom: 10 }}>Share with friends</Text>,
        subtitle: 'Browse through a lot of job opportunities from various job posting platforms',
    },
    {
        backgroundColor: COLORS.lightWhite,
        image: <Image source={require('../assets/images/save_job.png')} style={{ width: 250, height: 200 }}/>,
        title: <Text style={{ fontWeight: 'bold', fontSize: 32, marginBottom: 10 }}>Save jobs that you like</Text>,
        subtitle: 'Browse through a lot of job opportunities from various job posting platforms',
    }
];

const OnBoarding = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{ headerShown: false }} />

            <Onboarding 
                pages={slideContents}
                bottomBarHighlight={false}
                bottomBarHeight={80}
                imageContainerStyles={{paddingBottom: 20}}
                subTitleStyles={{paddingHorizontal: 25}}
            />

        </SafeAreaView>
    );
};

export default OnBoarding;
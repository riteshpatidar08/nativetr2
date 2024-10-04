import {
  View,
  Text,
  Button,
  Alert,
  ScrollView,
  Image,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { Badge } from 'react-native-paper';
import logoImg from './assets/icon.png';
import favicon from './assets/favicon.png';
import axios from 'axios';
export default function App() {
  const [name, setName] = useState('ritesh');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const showAlert = () => {
    setName('aman');
    Alert.alert(name);
    console.log('name changed');
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View
        style={{
          backgroundColor: 'yellow',
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            flex: 0.5,
          }}
        >
          {/* <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" /> */}
          <ImageBackground source={logoImg} style={{ flex: 1, width: 100 }}>
            <Text style={{ color: 'white', fontSize: 30 }}>{name}</Text>
            <Image source={favicon} style={{ height: 100, width: 100 }} />
          </ImageBackground>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 0.5,
          }}
        >
          <Badge>{data.length}</Badge>
          <ScrollView style={{ height: 300 }}>
            <Button title="Press Here" onPRess={showAlert} />
            {/* <Text style={{ color: 'black', fontSize: 30 }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum mi felis
            non aliquam mollis fringilla! Sociosqu natoque non; lacus mus nibh
            maecenas bibendum? Dis ridiculus nullam bibendum, luctus ex ex. Eget
            cursus enim integer dignissim interdum augue taciti varius.
            Adipiscing ac maecenas praesent mauris tempor et eleifend nunc. Dui
            laoreet risus cursus fames a tellus pretium integer. Ullamcorper ut
            habitasse fusce sed facilisi. Dolor mauris vehicula orci, parturient
            phasellus leo netus. Dictumst parturient inceptos elit sodales,
            commodo taciti. Ullamcorper urna sagittis dapibus non consequat.
            Tellus convallis sodales leo magnis netus tempor; urna taciti nisi.
            Mattis porttitor pulvinar aenean quam himenaeos. Ullamcorper dui
            praesent rhoncus consequat fusce leo. Nisi vestibulum sagittis
            ultrices gravida dignissim diam mus pretium. Parturient diam ad
            suspendisse, sed dignissim lobortis potenti. Ante accumsan donec,
            penatibus facilisi curae fusce feugiat. Praesent dui efficitur ut
            viverra eget vehicula class nulla. Ac potenti nisi lacus quisque
            pulvinar class praesent molestie. Penatibus interdum quis lectus
            cubilia lectus augue lectus. Consequat eu faucibus felis commodo
            est; vivamus bibendum. Erat phasellus primis lorem scelerisque
            senectus taciti mollis molestie. Curabitur est class augue curae
            nunc et. Odio vel mattis nibh senectus cursus aliquet gravida.
            Aenean posuere etiam massa maecenas ac consequat nunc. Iaculis et
            fames vitae sollicitudin dignissim proin, facilisi leo. Facilisis
            elementum conubia eu duis dui erat nibh. Nisl nascetur nunc purus
            per gravida ultrices velit! Per justo fusce justo vulputate netus
            facilisi platea. Maecenas nibh a ornare, fames gravida eleifend.
            Arcu est adipiscing nibh magnis justo. Consectetur magnis eu urna
            natoque scelerisque mollis vehicula. Mattis ut pulvinar dui dolor
            sit tortor magnis pellentesque ipsum. Lectus potenti mi vivamus
            metus gravida. Orci himenaeos egestas libero, purus consectetur ex
            imperdiet feugiat pharetra. Praesent dignissim tincidunt porttitor
            habitasse tristique nam? Taciti nulla condimentum etiam platea dolor
            maximus? Integer class fames laoreet, eu hendrerit integer dolor.
            Leo potenti fringilla, tortor mollis mollis posuere. Amet proin
            suspendisse nascetur, amet vestibulum finibus gravida. Tristique
            posuere leo venenatis maximus diam. Non habitant habitant aliquam
            facilisis; augue nostra curabitur. Blandit urna cras nec arcu
            maximus sociosqu porta maximus. Tristique maximus sollicitudin metus
            ad enim neque. Auctor aenean nascetur ante ligula etiam vitae
            mattis. Suspendisse ex justo sodales, non aptent ultrices odio.
            Euismod suspendisse ipsum justo justo ullamcorper vivamus. Senectus
            a mus sodales adipiscing sollicitudin maecenas, ridiculus
            suspendisse amet. Magna orci ligula est enim turpis aliquam montes
            venenatis. Elementum dolor mauris morbi leo maximus ante. Interdum
            suspendisse velit ante conubia tempor interdum bibendum. Elit
            finibus eros ante vel malesuada id ultrices vel massa. Risus
            pellentesque sagittis nisi parturient montes egestas tristique ac
            habitant. Penatibus ex curabitur aliquam libero blandit potenti
            massa malesuada. Viverra eu dignissim ultrices erat vulputate, proin
            condimentum erat. Dictumst cras primis in mi a felis ac curae. Netus
            tortor commodo cras elementum, aliquam consectetur. Duis quam
            ultrices laoreet quisque metus taciti mauris morbi. Viverra
            suspendisse blandit vel vivamus porta lacus erat.
          </Text> */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

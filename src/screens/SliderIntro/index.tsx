import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from '../../components/Button';
import { styles } from './styles';


const data = [
  {
    title: '1',
    image: require('../../images/logo.jpg'),
    text: 'Bem vindos ao Nosso Sangue Bom - NSB, um app destinado a aproximar pessoas com intuito de desenvolver a pratica de Doação de Sangue e cuidados com a saúde'
  },
  {
    title: '2',
    image: require('../../images/logo.jpg'),
    text: 'Esse canal é exclusivo para reunir doadores comprometidos com a vida! Solicite doações de sangue e se cadastre para fazer parte desse pacto pela vida.'
  },
  {
    title: '3',
    image: require('../../images/logo.jpg'),
    text: 'Aqui você pode solicitar sangue para pessoas que precisam receber doação de sangue, plaquetas ou hemácias'
  },
  {
    title: '4',
    image: require('../../images/logo.jpg'),
    text: 'Um Gesto simples pode salvar muitas vidas!! Obrigada por fazer parte desse movimento!! Vamos lá!'
  },
];

type Item = typeof data[0];

export default class App extends React.Component {
    slider: AppIntroSlider | undefined;

    nextSlide = () => {
      this.slider?.goToSlide((this.slider?.state.activeIndex+1), true);
    }

    prevSlide = () => {
      this.slider?.goToSlide((this.slider?.state.activeIndex-1), true);
    }

    toLoginScreen = () => {
      this.props.navigation.navigate("Login")
    }

    _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={styles.container}>
        <SafeAreaView style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </SafeAreaView>
      </View>
    );
  };

  _nextButton = () => {
    return (
      <View>
        <Button 
            title='Próximo'
            main={true}
            onPress={this.nextSlide}
        />
      </View>
    );
  };

  _skipButton = () =>{
    return (
        <View>
            <Button 
                title='Pular'
                main={false}
                onPress={this.toLoginScreen}
            />
        </View>
      );
  }

  _prevButton = () =>{
    return (
        <View>
            <Button 
                title='Anterior'
                main={false}
                onPress={this.prevSlide}
            />
        </View>
      );
  }

  _doneButton = () =>{
    return (
        <View>
            <Button 
                title='Concluir'
                onPress={this.toLoginScreen}
            />
        </View>
      );
  }

  _keyExtractor = (item: Item) => item.title;

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          renderNextButton={this._nextButton}
          renderSkipButton={this._skipButton}
          renderPrevButton={this._prevButton}
          renderDoneButton={this._doneButton}
          bottomButton
          showSkipButton
          showPrevButton
          data={data}
          activeDotStyle={{backgroundColor:'#D3455B'}}
          ref={(ref) => (this.slider = ref)}
        />
      </View>
    );
  }
}
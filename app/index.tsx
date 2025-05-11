import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View, TextInput } from 'react-native';
import CurrencyInput from 'react-currency-input-field';

/* const song = [
    {
        id: '1',
        title: "Photograph",
        artist: 'Ed Sheeran',
        artistPic: 'https://codehs.com/uploads/1128f7b2a2b686cf82e14612bb291490',
        duration: '4:18',
        image: 'https://codehs.com/uploads/71466ceae7bd24e3e6b52d0c793e36de'
    },
    {
        id: '2',
        title: "Thinking Out Loud",
        artist: 'Ed Sheeran',
        artistPic: 'https://codehs.com/uploads/1128f7b2a2b686cf82e14612bb291490',
        duration: '4:42',
        image: 'https://codehs.com/uploads/71466ceae7bd24e3e6b52d0c793e36de'
    }
];
interface SongListScreenProps {
  onSongPress: (song: Song) => void;
}
interface SongListScreenState {}
class SongListScreen extends Component<SongListScreenProps, SongListScreenState> {
  render() {
      return (
          <ScrollView style={styles.container}>
              {song.map((item) => (
                  <TouchableHighlight key={item.id} underlayColor="#444" style={styles.songItem} onPress={() => this.props.onSongPress(item)}>
                      <Text style={styles.songText}>{item.title}</Text>
                  </TouchableHighlight>
              ))}
          </ScrollView>
      );
  }
}

interface Song {
  id: string;
  title: string;
  artist: string;
  artistPic: string;
  duration: string;
  image: string;
}

interface SongDetailScreenProps {
  song: Song;
  onBackPress: () => void;
} */

/* class SongDetailScreen extends Component<SongDetailScreenProps> {
  render() {
     const { song, onBackPress } = this.props;
      return (
          <ScrollView contentContainerStyle={styles.songDetailContainer}>
              <Image source={{uri: song.image}} style={styles.songImage} />
              <Text style={styles.songTitle}>Song: {song.title}</Text>
              <Text style={styles.songArtist}>Artist: {song.artist}</Text>
              <Image source={{uri: song.artistPic}} style={styles.songImage} />
              <Text style={styles.songDuration}>Song Length: {song.duration} minutes</Text>
              <TouchableHighlight style={styles.backButton} underlayColor="#444" onPress={onBackPress}>
                  <Text style={styles.backButtonText}>Back</Text>
              </TouchableHighlight>
          </ScrollView>
      );
  }
} */

function myMoney({placeholder, onValueChange}: {placeholder:string, onValueChange: (value: string | undefined) => void}) {
  return (
    <CurrencyInput
      prefix="$"
      decimalSeparator="."
      groupSeparator=","
      decimalScale={2}
      placeholder={placeholder}
      style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20, paddingLeft: 10, color: 'black'}}
      onValueChange={onValueChange}
    />
  );
}

export default class App extends Component{
  state = {
    monthlyBudget: 0,
    monthlyExpenses: 0,
    daysSinceStart: 0,
    totalDaysInMonth: 0,
  }
    /* constructor(props: {}) {
      super(props);
      this.state = {
          selectedSong: null,
      };
  }
  handleSongPress = (song: Song) => {
      this.setState({selectedSong: song});
  };
  handleBackPress = () => {
      this.setState({selectedSong: null});
  }; */
  render() {
      return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.headerText}>My Monthly Financial Tracker</Text>
              </View>
                {myMoney({
                    placeholder: 'Enter your monthly budget',
                    onValueChange: (value) => {
                        const numericValue = value ? parseFloat(value) : 0;
                        this.setState({monthlyBudget: numericValue});
                    },
                })}
                {myMoney({
                    placeholder: 'Enter your monthly expenses',
                    onValueChange: (value) => {
                        const numericValue = value ? parseFloat(value) : 0;
                        this.setState({monthlyExpenses: numericValue});
                    },
                })}
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20, paddingLeft: 10, color: 'white'}}
                    placeholderTextColor="white"
                    placeholder="Enter the number of days it has been since the start of the month"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        const numericValue = text ? parseInt(text, 10) : 0;
                        this.setState({daysSinceStart: numericValue});
                    }}
                />
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20, paddingLeft: 10, color: 'white'}}
                    placeholderTextColor="white"
                    placeholder="Enter how many total days are in the month"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        const numericValue = text ? parseInt(text, 10) : 0;
                        this.setState({totalDaysInMonth: numericValue});
                    }}
                />
              {/* /*{this.state.selectedSong ? (
                  <SongDetailScreen song={this.state.selectedSong} onBackPress={this.handleBackPress}/>
              ) : (
                  <SongListScreen onSongPress={this.handleSongPress}/>
              )
              } */}
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#121212',
  },
  header: {
      width: '100%',
      padding: 20,
      backgroundColor: '#1DB954',
      alignItems: 'center',
      justifyContent: 'center',
  },
  headerText: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold'
  },
  songItem: {
      width: '100%',
      padding: 20,
      backgroundColor: '#1DB954',
      marginBottom: 5,
  },
  songText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
  },
  songDetailContainer: {
      alignItems: 'center',
      padding: 20,
  },
  songImage: {
      width: 300,
      height: 300,
      borderRadius: 10,
      marginBottom: 20,
  },
  songTitle: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
  },
  songArtist: {
      fontSize: 18,
      color: '#bbb',
      marginTop: 10,
  },
  songDuration: {
      fontSize: 16,
      color: '#ddd',
      marginTop: 5,
  },
  backButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor:'#1DB954',
      borderRadius: 5,
  },
  backButtonText: {
      color: '#fff',
      fontSize: 16,
  },
});
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, TextInput,Button, FlatList } from 'react-native';
import CurrencyInput from 'react-currency-input-field';

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
    isOnTrack: null,
    history: [],
    currentScreen: 'main',
  };
  handleComparison = () => {
    const {monthlyBudget, monthlyExpenses, daysSinceStart, totalDaysInMonth} = this.state;
    const expensesRatio = monthlyBudget > 0 ? monthlyExpenses/monthlyBudget : 0;
    const daysRatio = totalDaysInMonth > 0 ? daysSinceStart/totalDaysInMonth : 0;
    const isOnTrack = expensesRatio <= daysRatio;
    const newEntry = {
        monthlyBudget,
        monthlyExpenses,
        daysSinceStart,
        totalDaysInMonth,
        status: isOnTrack ? 'On track' : 'Overspending',
    };
    this.setState({
        isOnTrack,
        history: [...this.state.history, newEntry],
    });
  };
  renderHistoryScreen = () => {
    const{history} = this.state;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                  <Text style={styles.headerText}>History</Text>
            </View>
            <FlatList
                data={history}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={styles.historyItem}>
                        <Text style={styles.historyText}>
                            Day {item.daysSinceStart} of {item.totalDaysInMonth}
                        </Text>
                        <Text style={styles.historyText}>
                            Budget: ${item.monthlyBudget}, Expenses: ${item.monthlyExpenses}, Status: {item.status}
                        </Text>
                    </View>
                )}
            />
            <Button title="Back" color='#1DB954' onPress={() => this.setState({currentScreen: 'main'})}/>
        </View>
    )
  }
  renderMainScreen = () => {
    const {isOnTrack} = this.state;
    if(isOnTrack === true){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>You are on track!</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{uri: 'https://codehs.com/uploads/0c9ae41c8dccb3b2d47659498c15d38a'}} style={styles.image}/>
                    <Button title="Back" color='#1DB954' onPress={() => this.setState({isOnTrack: null})}/>
                </View>
            </View>
        )
    }
    if(isOnTrack === false){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>You are overspending!</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{uri: 'https://codehs.com/uploads/5e95d2b9b22ab9f650f908cc096921f6'}} style={styles.image}/>
                    <Button title="Back" color='#1DB954' onPress={() => this.setState({isOnTrack: null})}/>
                </View>
            </View>
        )
    }
    return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.headerText}>Monetly</Text>
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
                <TextInput style={{height: 40, backgroundColor: 'white', borderColor: 'grey', borderWidth: 1, margin: 20, paddingLeft: 10, color: 'black', fontSize: 13}}
                    placeholderTextColor="grey"
                    placeholder="Enter the number of days it has been since the start of the month"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        const numericValue = text ? parseInt(text, 10) : 0;
                        this.setState({daysSinceStart: numericValue});
                    }}
                />
                <TextInput style={{height: 40, backgroundColor: 'white', borderColor: 'grey', borderWidth: 1, margin: 20, paddingLeft: 10, color: 'black', fontSize: 13}}
                    placeholderTextColor="grey"
                    placeholder="Enter how many total days are in the month"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        const numericValue = text ? parseInt(text, 10) : 0;
                        this.setState({totalDaysInMonth: numericValue});
                    }}
                />
                <Button title="Check Status" color='#1DB954' onPress={this.handleComparison}/>
                <Button title="History" color='#1DB954' onPress={() =>this.setState({currentScreen: 'history'})}/>
          </View>
      );
  };
  render(){
    const{currentScreen} = this.state;
    if(currentScreen === 'history'){
        return this.renderHistoryScreen();
    }
    return this.renderMainScreen();
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
  imageContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  image: {
      width: 500,
      height: 500,
      borderRadius: 50,
      marginBottom: 20,
  },
  historyItem:{
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  historyText: {
    fontSize: 16,
    color: 'white',
  }
});
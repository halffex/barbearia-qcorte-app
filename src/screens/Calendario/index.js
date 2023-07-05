import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

export default function Calendario() {
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [morningCardSelected, setMorningCardSelected] = useState(null);
  const [afternoonCardSelected, setAfternoonCardSelected] = useState(null);
  const [nightCardSelected, setNightCardSelected] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleMorningCardSelect = (index) => {
    if (morningCardSelected === index) {
      setMorningCardSelected(null);
    } else {
      setMorningCardSelected(index);
    }
  };

  const handleAfternoonCardSelect = (index) => {
    if (afternoonCardSelected === index) {
      setAfternoonCardSelected(null);
    } else {
      setAfternoonCardSelected(index);
    }
  };

  const handleNightCardSelect = (index) => {
    if (nightCardSelected === index) {
      setNightCardSelected(null);
    } else {
      setNightCardSelected(index);
    }
  };

  const isMorningCardSelected = (index) => {
    return morningCardSelected === index;
  };

  const isAfternoonCardSelected = (index) => {
    return afternoonCardSelected === index;
  };

  const isNightCardSelected = (index) => {
    return nightCardSelected === index;
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.centeredView}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Data do agendamento</Text>
          <View style={styles.barra}></View>
        </View>

        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
            theme={{
              selectedDayBackgroundColor: '#CC6600',
              todayTextColor: '#CC6600',
              arrowColor: '#CC6600',
              calendarBackground: '#3D2A17',
              backgroundColor: '#ffffff',
              textSectionTitleColor: '#ffffff',
              selectedDayTextColor: '#ffffff',
              dayTextColor: '#ffffff',
              textDisabledColor: '#b6c1cd',
              monthTextColor: '#ffffff',
            }}
            
          />
        </View>



        
        
          

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2A17',
  },
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: '5%',
    marginTop: '10%',
  },
  title: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 23, 
    fontWeight: 'bold'
  },
  barra: {
    height: 3,
    width: 260,
    borderRadius: 100,
    backgroundColor: '#CC6600'
  },
  calendarContainer: {
    width: '90%',
    height: 'auto',
  },
  button: {
    width: 340,
    height: 50,
    backgroundColor: '#CC6600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '10%', // Atualize a margem superior conforme necessário
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
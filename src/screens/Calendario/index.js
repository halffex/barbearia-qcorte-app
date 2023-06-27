import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
};

LocaleConfig.defaultLocale = 'pt-br';

const Calendario = () => {
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
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Data do Agendamento</Text>
        <View style={styles.lineContainer}>
          <View style={styles.underline} />
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
            theme={{
              selectedDayBackgroundColor: '#CC6600',
              todayTextColor: '#CC6600',
              arrowColor: '#CC6600',
            }}
          />
        </View>
        <Text style={styles.belowTitle}>Abaixo do Calendário</Text>
        <View style={styles.gridContainer}>
          <View style={styles.column}>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isMorningCardSelected(0) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleMorningCardSelect(0)}
            >
              <Text style={styles.turnoText}>Manhã</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isMorningCardSelected(1) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleMorningCardSelect(1)}
            >
              <Text style={styles.turnoText}>09:30</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isMorningCardSelected(2) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleMorningCardSelect(2)}
            >
              <Text style={styles.turnoText}>10:30</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isAfternoonCardSelected(0) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleAfternoonCardSelect(0)}
            >
              <Text style={styles.turnoText}>Tarde</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isAfternoonCardSelected(1) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleAfternoonCardSelect(1)}
            >
              <Text style={styles.turnoText}>14:30</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isAfternoonCardSelected(2) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleAfternoonCardSelect(2)}
            >
              <Text style={styles.turnoText}>16:00</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isNightCardSelected(0) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleNightCardSelect(0)}
            >
              <Text style={styles.turnoText}>Noite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isNightCardSelected(1) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleNightCardSelect(1)}
            >
              <Text style={styles.turnoText}>19:00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.card,
                { backgroundColor: isNightCardSelected(2) ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleNightCardSelect(2)}
            >
              <Text style={styles.turnoText}>20:00</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2A17',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400, // Ajuste a altura conforme necessário
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  lineContainer: {
    marginBottom: 20,
  },
  underline: {
    width: '65%',
    height: 2,
    backgroundColor: '#CC6600',
  },
  calendarContainer: {
    marginTop: -15,
    width: 308,
    height: 168,
  },
  belowTitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 200,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  column: {
    marginHorizontal: 10,
  },
  card: {
    width: 70,
    height: 34,
    backgroundColor: '#8B4513',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  turnoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: 340,
    height: 50,
    backgroundColor: '#CC6600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 70, // Atualize a margem superior conforme necessário
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Calendario;
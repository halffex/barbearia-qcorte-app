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

const turnos = [
  { turno: 'Manhã', horarios: ['09:30', '10:30'] },
  { turno: 'Tarde', horarios: ['14:30', '16:00'] },
  { turno: 'Noite', horarios: ['19:00', '20:00'] },
];

export default function Calendario() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTurno, setSelectedTurno] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleTurnoSelect = (index) => {
    setSelectedTurno(index === selectedTurno ? null : index);
    setSelectedHorario(null);
  };

  const handleHorarioSelect = (horario) => {
    setSelectedHorario(horario === selectedHorario ? null : horario);
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

        <View style={styles.titleContainer2}>
          <Text style={styles.title2}>Escolha seu horário</Text>
          <View style={styles.barra2}></View>
        </View>

        <View style={styles.turnoContainer}>
          {turnos.map((turno, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.turnoCard,
                { backgroundColor: index === selectedTurno ? '#CC6600' : '#8B4513' },
              ]}
              onPress={() => handleTurnoSelect(index)}
            >
              <Text style={styles.turnoText}>{turno.turno}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedTurno !== null && (
          <View style={styles.horarioContainer}>
            {turnos[selectedTurno].horarios.map((horario, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.horarioCard,
                  { backgroundColor: horario === selectedHorario ? '#CC6600' : '#8B4513' },
                ]}
                onPress={() => handleHorarioSelect(horario)}
              >
                <Text style={styles.horarioText}>{horario}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    marginTop: '8%',
  },
  title: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 22, 
    fontWeight: 'bold'
  },
  barra: {
    height: 3,
    width: 250,
    borderRadius: 100,
    backgroundColor: '#CC6600'
  },
  calendarContainer: {
    width: '90%',
    height: 'auto',
  },
  titleContainer2: {
    marginBottom: '7%',
    marginTop: '3%',
  },
  title2: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 23, 
    fontWeight: 'bold'
  },
  barra2: {
    height: 3,
    width: 230,
    borderRadius: 100,
    backgroundColor: '#CC6600'
  },
  turnoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  turnoCard: {
    width: 90,
    height: 40,
    backgroundColor: '#8B4513',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 15,
  },
  turnoText: {
    color: 'white',
    fontSize: 16,
  },
  horarioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  horarioCard: {
    width: 90,
    height: 40,
    backgroundColor: '#8B4513',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  horarioText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    width: 340,
    height: 40,
    backgroundColor: '#CC6600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '20%',
    position: 'absolute',
    bottom: -140,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

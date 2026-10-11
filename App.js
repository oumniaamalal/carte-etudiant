import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />

      <View style={styles.card}>
        {/* En-tête de la carte */}
        <View style={styles.header}>
          <Image
            source={require('./assets/emsi.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.schoolInfo}>
            <Text style={styles.schoolName}>EMSI</Text>
            <Text style={styles.schoolSubtitle}>
              ANFA
            </Text>
            <Text style={styles.schoolDescription}>
              École Marocaine des Sciences de l'Ingénieur
            </Text>
          </View>
        </View>

        {/* Séparateur */}
        <View style={styles.separator} />

        {/* Titre */}
        <Text style={styles.cardTitle}>
          CARTE D'ÉTUDIANT
        </Text>

        <Text style={styles.academicYear}>
          ANNÉE UNIVERSITAIRE 2025 / 2026
        </Text>

        {/* Informations de l'étudiant */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nom</Text>
            <Text style={styles.value}>AMALAL</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Prénom</Text>
            <Text style={styles.value}>OUMNIA</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>ID étudiant</Text>
            <Text style={styles.value}>ETU-2025-001</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Établissement</Text>
            <Text style={styles.value}>EMSI</Text>
          </View>
        </View>

        {/* Pied de carte */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            CARTE PERSONNELLE D'ÉTUDIANT
          </Text>
        </View>
      </View>

      <Text style={styles.note}>
        Ma première application React Native avec Expo
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#eef2f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 22,
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderTopWidth: 7,
    borderTopColor: '#e5a323',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  logo: {
    width: 90,
    height: 90,
  },

  schoolInfo: {
    flex: 1,
  },

  schoolName: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#173b70',
  },

  schoolSubtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#e5a323',
    letterSpacing: 2,
  },

  schoolDescription: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 5,
  },

  separator: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#173b70',
    textAlign: 'center',
  },

  academicYear: {
    fontSize: 11,
    fontWeight: '600',
    color: '#e5a323',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
    letterSpacing: 1,
  },

  infoContainer: {
    gap: 16,
  },

  infoRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#edf0f4',
    paddingBottom: 10,
  },

  label: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },

  value: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  footer: {
    marginTop: 24,
    paddingVertical: 12,
    backgroundColor: '#173b70',
    borderRadius: 10,
  },

  footerText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },

  note: {
    marginTop: 20,
    color: '#64748b',
    fontSize: 12,
    textAlign: 'center',
  },
});
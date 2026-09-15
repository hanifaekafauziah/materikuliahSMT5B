import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>CURRICULUM VITAE</Text>
          <Text style={styles.subtitle}>Data Diri Mahasiswa</Text>
        </View>

        {/* Data Diri */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Data Diri</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <Text style={styles.value}>Hanifa Eka Fauziah</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>NIM</Text>
            <Text style={styles.value}>2488010060</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Asal Sekolah</Text>
            <Text style={styles.value}>SMA N 2 Pemalang</Text>
          </View>
        </View>

        {/* Cita-cita */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cita-cita</Text>
          <Text style={styles.description}>
            Menjadi seorang profesional di bidang teknologi informasi yang
            memiliki kemampuan dan pengalaman dalam mengembangkan teknologi
            yang bermanfaat bagi masyarakat.
          </Text>
        </View>

        {/* Rencana */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Rencana Menggapai Cita-cita</Text>

          <Text style={styles.point}>
            1. Meningkatkan kemampuan dalam bidang pemrograman dan teknologi
            informasi.
          </Text>

          <Text style={styles.point}>
            2. Memperbanyak pengalaman melalui tugas, praktikum, dan proyek
            pengembangan aplikasi.
          </Text>

          <Text style={styles.point}>
            3. Mengikuti kegiatan atau pelatihan yang dapat menambah
            keterampilan di bidang teknologi.
          </Text>

          <Text style={styles.point}>
            4. Terus belajar mengikuti perkembangan teknologi dan membangun
            portofolio.
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © 2026 Hanifa Eka Fauziah
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
  },

  content: {
    padding: 20,
  },

  header: {
    backgroundColor: '#2F80ED',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 14,
    color: '#EAF2FF',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2F80ED',
    marginBottom: 15,
  },

  row: {
    marginBottom: 15,
  },

  label: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#444444',
    textAlign: 'justify',
  },

  point: {
    fontSize: 15,
    lineHeight: 24,
    color: '#444444',
    marginBottom: 10,
  },

  footer: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 20,
  },
});
import { View, Text, StyleSheet } from 'react-native';

export function ItemCompra({ nome }) {
  return (
    <View style={styles.card}>
      <View style={styles.marcador} />
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
  },

  marcador: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#555555',
    marginRight: 12,
  },

  nome: {
    fontSize: 17,
  },
});

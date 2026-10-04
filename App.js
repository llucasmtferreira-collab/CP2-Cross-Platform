import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

import { ItemCompra } from './components/ItemCompra';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionarItem() {
    if (texto !== '') {
      setItens([...itens, texto]);
      setTexto('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <Text style={styles.subtitulo}>Adicione os itens que precisa comprar</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={texto}
        onChangeText={setTexto}
      />

      <View style={styles.botao}>
        <Button
          title="Adicionar"
          onPress={adicionarItem}
        />
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ItemCompra nome={item} />
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 25,
    paddingTop: 60,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  botao: {
    marginTop: 10,
    marginBottom: 10,
  },

  lista: {
    paddingBottom: 20,
  },
});

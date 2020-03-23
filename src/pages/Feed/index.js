import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const response = await fetch(
        'http://localhost:3000/feed?_expand=author&limit=5&page=1',
      );

      const data = await response.json();

      setFeed(data);
    }
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        renderItem={({item}) => {}}
      />
    </View>
  );
}

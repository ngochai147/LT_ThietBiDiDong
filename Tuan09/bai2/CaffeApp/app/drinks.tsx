import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity,
  Alert 
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as SQLite from 'expo-sqlite';

interface Drink {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function DrinksScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    initDatabase();
  }, []);

  const initDatabase = async () => {
    try {
      const db = await SQLite.openDatabaseAsync('cafe.db');
      
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS drinks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          price REAL NOT NULL,
          image TEXT
        );
      `);

      const result = await db.getAllAsync('SELECT COUNT(*) as count FROM drinks');
      const count = (result[0] as any).count;

      if (count === 0) {
        await db.execAsync(`
          INSERT INTO drinks (name, price, image) VALUES 
          ('Milk', 10, 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200'),
          ('Origin', 60, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200'),
          ('Salt', 8, 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200'),
          ('Espresso', 9, 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200'),
          ('Capuchino', 13, 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200'),
          ('Weasel', 10, 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=200'),
          ('Culi', 10, 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=200'),
          ('Catimor', 10, 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=200');
        `);
      }

      const allDrinks = await db.getAllAsync('SELECT * FROM drinks');
      setDrinks(allDrinks.map((d: any) => ({ ...d, quantity: 0 })));
      
    } catch (error) {
      console.error('Database error:', error);
      Alert.alert('Error', 'Failed to load drinks');
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setDrinks(prevDrinks => 
      prevDrinks.map(drink => 
        drink.id === id 
          ? { ...drink, quantity: Math.max(0, drink.quantity + change) }
          : drink
      )
    );
  };

  const getTotalItems = () => {
    return drinks.reduce((sum, drink) => sum + drink.quantity, 0);
  };

  const goToCart = () => {
    const orderItems = drinks.filter(d => d.quantity > 0);
    if (orderItems.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to your cart');
      return;
    }
    router.push({ 
      pathname: '/orders' as any, 
      params: { 
        items: JSON.stringify(orderItems),
        shopName: params.shopName 
      } 
    });
  };

  const renderDrinkItem = ({ item }: { item: Drink }) => (
    <View style={styles.drinkItem}>
      <Image 
        source={{ uri: item.image }}
        style={styles.drinkImage}
      />
      <View style={styles.drinkInfo}>
        <Text style={styles.drinkName}>{item.name}</Text>
        <Text style={styles.drinkPrice}>${item.price}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity 
          style={[styles.quantityButton, styles.minusButton]}
          onPress={() => updateQuantity(item.id, -1)}
        >
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity 
          style={[styles.quantityButton, styles.plusButton]}
          onPress={() => updateQuantity(item.id, 1)}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Drinks</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={drinks}
        renderItem={renderDrinkItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity 
        style={styles.cartButton}
        onPress={goToCart}
      >
        <Text style={styles.cartButtonText}>GO TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    fontSize: 28,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    fontSize: 20,
    color: '#4caf50',
  },
  listContainer: {
    padding: 15,
    paddingBottom: 100,
  },
  drinkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  drinkImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
  },
  drinkInfo: {
    flex: 1,
    marginLeft: 15,
  },
  drinkName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  drinkPrice: {
    fontSize: 14,
    color: '#666',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusButton: {
    backgroundColor: '#4caf50',
  },
  plusButton: {
    backgroundColor: '#4caf50',
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 25,
    textAlign: 'center',
  },
  cartButton: {
    backgroundColor: '#ffa726',
    padding: 18,
    margin: 15,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

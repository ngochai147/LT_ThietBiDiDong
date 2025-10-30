import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function OrdersScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [orders, setOrders] = useState<OrderItem[]>(() => {
    try {
      const itemsParam = params.items;
      if (!itemsParam || itemsParam === 'undefined' || itemsParam === 'null') {
        return [];
      }
      return JSON.parse(itemsParam as string);
    } catch (error) {
      console.error('Error parsing items:', error);
      return [];
    }
  });

  const getTotal = () => {
    return orders.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const updateQuantity = (id: number, change: number) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === id 
          ? { ...order, quantity: Math.max(0, order.quantity + change) }
          : order
      ).filter(order => order.quantity > 0)
    );
  };

  const handlePayment = () => {
    if (orders.length === 0) {
      Alert.alert('Cart Empty', 'No items to pay for');
      return;
    }
    Alert.alert(
      'Payment', 
      `Total: $${getTotal()}\n\nProceed with payment?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Pay Now', 
          onPress: () => {
            Alert.alert('Success', 'Order placed successfully!', [
              { text: 'OK', onPress: () => router.push('/' as any) }
            ]);
          }
        }
      ]
    );
  };

  const orderCards = [
    { id: '1', type: 'CAFE DELIVERY', order: '#18', price: 5, color: '#00bcd4' },
    { id: '2', type: 'CAFE', order: '#18', price: 25, color: '#9c27b0' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Your orders</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.orderCardsContainer}>
          {orderCards.map(card => (
            <View key={card.id} style={[styles.orderCard, { backgroundColor: card.color }]}>
              <Text style={styles.orderCardType}>{card.type}</Text>
              <Text style={styles.orderCardOrder}>Order {card.order}</Text>
              <Text style={styles.orderCardPrice}>${card.price}</Text>
            </View>
          ))}
        </View>

        {orders.length > 0 && (
          <View style={styles.selectedItemsContainer}>
            {orders.slice(0, 2).map(item => (
              <View key={item.id} style={styles.selectedItem}>
                <Image source={{ uri: item.image }} style={styles.selectedItemImage} />
                <Text style={styles.selectedItemName} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.selectedItemPrice}>${item.price}</Text>
                <View style={styles.itemQuantityControls}>
                  <TouchableOpacity 
                    style={styles.itemQuantityButton}
                    onPress={() => updateQuantity(item.id, -1)}
                  >
                    <Text style={styles.itemQuantityButtonText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.itemQuantity}>{item.quantity}</Text>
                  <TouchableOpacity 
                    style={styles.itemQuantityButton}
                    onPress={() => updateQuantity(item.id, 1)}
                  >
                    <Text style={styles.itemQuantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity 
          style={styles.payButton}
          onPress={handlePayment}
        >
          <Text style={styles.payButtonText}>PAY NOW</Text>
        </TouchableOpacity>
      </ScrollView>
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
  orderCardsContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 15,
  },
  orderCard: {
    flex: 1,
    padding: 18,
    borderRadius: 12,
  },
  orderCardType: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderCardOrder: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 15,
  },
  orderCardPrice: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  selectedItemsContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 15,
  },
  selectedItem: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 12,
    width: 130,
  },
  selectedItemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  selectedItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  selectedItemPrice: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  itemQuantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemQuantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemQuantityButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 13,
    fontWeight: 'bold',
    minWidth: 20,
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#ffa726',
    padding: 18,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import { useRouter } from 'expo-router';

interface Shop {
  id: string;
  name: string;
  address: string;
  status: string;
  time: string;
  image: string;
  accepting: boolean;
}

export default function ShopsScreen() {
  const router = useRouter();
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const response = await fetch('https://6830916a6205ab0d6c399ca4.mockapi.io/products');
      const data = await response.json();
      setShops(data);
    } catch (error) {
      console.error('Error fetching shops:', error);

    } finally {
      setLoading(false);
    }
  };

  const renderShopItem = ({ item }: { item: Shop }) => {
    return (
      <TouchableOpacity 
        style={styles.shopCard}
        onPress={() => router.push({ pathname: '/drinks' as any, params: { shopId: item.id, shopName: item.name }})}
      >
        <Image 
          source={{ uri: item.image }}
          style={styles.shopImage}
        />
        
        <View style={styles.statusContainer}>
          <View style={[styles.statusBadge, { backgroundColor: item.accepting ? '#4caf50' : '#f44336' }]}>
            <Text style={styles.statusIcon}>{item.accepting ? '✓' : '⚠'}</Text>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
          
          <View style={styles.timeBadge}>
            <Text style={styles.timeIcon}>🕐</Text>
            <Text style={[styles.timeText, { color: item.accepting ? '#4caf50' : '#f44336' }]}>
              {item.time}
            </Text>
          </View>
          
          <Text style={styles.locationIcon}>📍</Text>
        </View>

        <View style={styles.shopInfo}>
          <Text style={styles.shopName}>{item.name}</Text>
          <Text style={styles.shopAddress}>{item.address}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00bcd4" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Shops Near Me</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={shops}
        renderItem={renderShopItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  shopCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  shopImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#e0e0e0',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 5,
  },
  statusIcon: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  timeIcon: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  locationIcon: {
    fontSize: 18,
    marginLeft: 'auto',
  },
  shopInfo: {
    padding: 15,
    paddingTop: 5,
  },
  shopName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  shopAddress: {
    fontSize: 13,
    color: '#666',
  },
});

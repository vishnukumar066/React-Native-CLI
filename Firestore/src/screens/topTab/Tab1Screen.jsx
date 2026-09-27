import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';

import {
  Search,
  ShoppingBag,
  Heart,
  ArrowRight,
  ChevronRight,
  Star,
  User,
  Grid2X2,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const categories = [
  {
    id: '1',
    title: 'Men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400',
  },
  {
    id: '2',
    title: 'Women',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
  },
  {
    id: '3',
    title: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: '4',
    title: 'Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
  },
  {
    id: '5',
    title: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
  },
  {
    id: '6',
    title: 'Watches',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
  },
];

const products = [
  {
    id: '1',
    name: "Men's Oversized Hoodie",
    price: '₹1,199',
    oldPrice: '₹1,999',
    discount: '-40%',
    rating: '4.5',
    reviews: '1.2k',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
  },
  {
    id: '2',
    name: 'Floral Midi Dress',
    price: '₹1,049',
    oldPrice: '₹1,499',
    discount: '-30%',
    rating: '4.6',
    reviews: '856',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
  },
  {
    id: '3',
    name: 'Casual Sneakers',
    price: '₹2,249',
    oldPrice: '₹2,999',
    discount: '-25%',
    rating: '4.4',
    reviews: '742',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
  },
];

const Tab1Screen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              Style<Text style={styles.logoOrange}>Cart</Text>
            </Text>

            <Text style={styles.tagline}>Wear Your Vibe</Text>
          </View>

          <View style={styles.headerActions}>
            <Pressable style={styles.iconButton}>
              <Search size={25} color="#111827" strokeWidth={2} />
            </Pressable>

            <Pressable style={styles.cartButton}>
              <ShoppingBag size={25} color="#111827" strokeWidth={2} />

              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>2</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* ================= SEARCH ================= */}

        <View style={styles.searchContainer}>
          <Search size={22} color="#7B8494" />

          <TextInput
            placeholder="Search for clothes, brands and more..."
            placeholderTextColor="#7B8494"
            style={styles.searchInput}
          />
        </View>

        {/* ================= HERO ================= */}

        <View style={styles.heroContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=1200',
            }}
            style={styles.heroImage}
          />

          <View style={styles.heroOverlay} />

          <View style={styles.heroContent}>
            <Text style={styles.heroSmallText}>NEW SEASON</Text>

            <Text style={styles.heroTitle}>
              Style Up{'\n'}
              <Text style={styles.heroOrangeText}>Your Wardrobe</Text>
            </Text>

            <Text style={styles.heroDescription}>
              Trendy outfits. Better you.
            </Text>

            <Pressable style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Shop Now</Text>

              <ArrowRight size={20} color="#FFFFFF" strokeWidth={2.5} />
            </Pressable>
          </View>

          {/* Slider dots */}

          <View style={styles.sliderDots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* ================= CATEGORIES ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>

          <Pressable style={styles.viewAllContainer}>
            <Text style={styles.viewAllText}>View All</Text>

            <ChevronRight size={18} color="#6B7280" />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map(category => (
            <Pressable key={category.id} style={styles.categoryItem}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                />
              </View>

              <Text style={styles.categoryTitle}>{category.title}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* ================= POPULAR PRODUCTS ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Products</Text>

          <Pressable style={styles.viewAllContainer}>
            <Text style={styles.viewAllText}>View All</Text>

            <ArrowRight size={18} color="#6B7280" />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}
        >
          {products.map(product => (
            <Pressable key={product.id} style={styles.productCard}>
              {/* Product image */}

              <View style={styles.productImageContainer}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                />

                {/* Discount */}

                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{product.discount}</Text>
                </View>

                {/* Wishlist */}

                <Pressable style={styles.wishlistButton}>
                  <Heart size={20} color="#FFFFFF" strokeWidth={2} />
                </Pressable>
              </View>

              {/* Product information */}

              <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={1}>
                  {product.name}
                </Text>

                {/* Rating */}

                <View style={styles.ratingContainer}>
                  <Star size={15} color="#F59E0B" fill="#F59E0B" />

                  <Text style={styles.ratingText}>{product.rating}</Text>

                  <Text style={styles.reviewText}>({product.reviews})</Text>
                </View>

                {/* Price */}

                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{product.price}</Text>

                  <Text style={styles.oldPrice}>{product.oldPrice}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* ================= SPECIAL OFFER ================= */}

        <View style={styles.offerContainer}>
          <View style={styles.offerContent}>
            <Text style={styles.offerSmallText}>LIMITED TIME OFFER</Text>

            <Text style={styles.offerTitle}>Get 20% OFF</Text>

            <Text style={styles.offerDescription}>On your first order</Text>

            <Pressable style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Shop Now</Text>

              <ArrowRight size={18} color="#111827" />
            </Pressable>
          </View>

          <View style={styles.offerCircle}>
            <Text style={styles.offerPercent}>20%</Text>
            <Text style={styles.offerOff}>OFF</Text>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tab1Screen;

/* ================================================= */
/*                     STYLES                        */
/* ================================================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fecaca',
  },

  scrollContent: {
    paddingBottom: 5,
  },

  /* ================= HEADER ================= */

  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -1.2,
  },

  logoOrange: {
    color: '#F15A29',
  },

  tagline: {
    marginTop: 2,
    fontSize: 15,
    color: '#7B8494',
    fontWeight: '500',
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  iconButton: {
    width: 44,
    height: 44,

    justifyContent: 'center',
    alignItems: 'center',
  },

  cartButton: {
    width: 44,
    height: 44,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },

  cartBadge: {
    position: 'absolute',
    right: 1,
    top: 0,

    width: 20,
    height: 20,

    borderRadius: 10,

    backgroundColor: '#F15A29',

    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },

  /* ================= SEARCH ================= */

  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 20,

    height: 54,

    backgroundColor: '#F5F6F8',

    borderRadius: 18,

    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,

    marginLeft: 12,

    fontSize: 15,
    color: '#111827',
  },

  /* ================= HERO ================= */

  heroContainer: {
    height: 300,

    marginHorizontal: 16,

    borderRadius: 22,

    overflow: 'hidden',

    position: 'relative',

    backgroundColor: '#E8DED0',
  },

  heroImage: {
    width: '100%',
    height: '100%',

    position: 'absolute',
  },

  heroOverlay: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: 'rgba(242, 232, 218, 0.55)',
  },

  heroContent: {
    position: 'absolute',

    left: 22,
    top: 35,
  },

  heroSmallText: {
    fontSize: 12,

    color: '#4B5563',

    letterSpacing: 4,

    fontWeight: '700',

    marginBottom: 12,
  },

  heroTitle: {
    fontSize: 34,

    lineHeight: 40,

    color: '#111827',

    fontWeight: '800',

    letterSpacing: -1,
  },

  heroOrangeText: {
    color: '#F15A29',
  },

  heroDescription: {
    marginTop: 10,

    fontSize: 15,

    color: '#374151',

    fontWeight: '500',
  },

  shopButton: {
    marginTop: 20,

    backgroundColor: '#111827',

    borderRadius: 30,

    paddingHorizontal: 20,
    paddingVertical: 13,

    flexDirection: 'row',
    alignItems: 'center',

    alignSelf: 'flex-start',

    gap: 8,
  },

  shopButtonText: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '700',
  },

  sliderDots: {
    position: 'absolute',

    bottom: 15,

    left: 0,
    right: 0,

    flexDirection: 'row',

    justifyContent: 'center',

    gap: 7,
  },

  dot: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: '#FFFFFF',
  },

  activeDot: {
    width: 18,

    backgroundColor: '#111827',
  },

  /* ================= SECTION ================= */

  sectionHeader: {
    marginTop: 28,

    paddingHorizontal: 20,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 21,

    color: '#111827',

    fontWeight: '800',

    letterSpacing: -0.5,
  },

  viewAllContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 2,
  },

  viewAllText: {
    color: '#6B7280',

    fontSize: 14,

    fontWeight: '600',
  },

  /* ================= CATEGORIES ================= */

  categoryList: {
    paddingHorizontal: 20,

    paddingTop: 18,

    paddingRight: 10,
  },

  categoryItem: {
    width: 82,

    marginRight: 15,

    alignItems: 'center',
  },

  categoryImageContainer: {
    width: 76,
    height: 76,

    borderRadius: 20,

    backgroundColor: '#F5F6F8',

    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryImage: {
    width: '100%',
    height: '100%',
  },

  categoryTitle: {
    marginTop: 9,

    fontSize: 13,

    color: '#111827',

    fontWeight: '600',

    textAlign: 'center',
  },

  /* ================= PRODUCTS ================= */

  productList: {
    paddingHorizontal: 20,

    paddingTop: 18,

    paddingRight: 10,
  },

  productCard: {
    width: width * 0.68,

    marginRight: 16,

    borderRadius: 18,

    backgroundColor: '#FFFFFF',

    overflow: 'hidden',

    borderWidth: 1,

    borderColor: '#F0F0F0',

    elevation: 2,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.06,

    shadowRadius: 8,
  },

  productImageContainer: {
    height: 230,

    backgroundColor: '#F2F3F5',

    position: 'relative',

    overflow: 'hidden',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  discountBadge: {
    position: 'absolute',

    top: 12,
    left: 12,

    backgroundColor: '#22A06B',

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 20,
  },

  discountText: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '800',
  },

  wishlistButton: {
    position: 'absolute',

    right: 12,
    top: 12,

    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: 'rgba(0,0,0,0.35)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  productInfo: {
    padding: 14,
  },

  productName: {
    fontSize: 16,

    color: '#111827',

    fontWeight: '700',
  },

  ratingContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 8,

    gap: 4,
  },

  ratingText: {
    fontSize: 13,

    color: '#374151',

    fontWeight: '700',
  },

  reviewText: {
    fontSize: 13,

    color: '#9CA3AF',
  },

  priceContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 8,

    gap: 8,
  },

  price: {
    fontSize: 20,

    color: '#111827',

    fontWeight: '800',
  },

  oldPrice: {
    fontSize: 13,

    color: '#9CA3AF',

    textDecorationLine: 'line-through',
  },

  /* ================= OFFER ================= */

  offerContainer: {
    marginHorizontal: 20,

    marginTop: 30,

    height: 150,

    borderRadius: 24,

    backgroundColor: '#F4EEE5',

    overflow: 'hidden',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 22,
  },

  offerContent: {
    flex: 1,
  },

  offerSmallText: {
    fontSize: 10,

    letterSpacing: 2,

    color: '#6B7280',

    fontWeight: '800',
  },

  offerTitle: {
    marginTop: 5,

    fontSize: 25,

    color: '#111827',

    fontWeight: '800',
  },

  offerDescription: {
    marginTop: 2,

    fontSize: 13,

    color: '#6B7280',
  },

  offerButton: {
    marginTop: 12,

    alignSelf: 'flex-start',

    paddingHorizontal: 15,
    paddingVertical: 8,

    borderRadius: 20,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 5,
  },

  offerButtonText: {
    color: '#111827',

    fontSize: 12,

    fontWeight: '700',
  },

  offerCircle: {
    width: 95,
    height: 95,

    borderRadius: 48,

    backgroundColor: '#F15A29',

    justifyContent: 'center',
    alignItems: 'center',

    transform: [{ rotate: '-10deg' }],
  },

  offerPercent: {
    color: '#FFFFFF',

    fontSize: 26,

    fontWeight: '900',
  },

  offerOff: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '800',

    letterSpacing: 2,
  },
});

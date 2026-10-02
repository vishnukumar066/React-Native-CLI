import { useCallback, useMemo, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import {
  Check,
  ChevronDown,
  Filter,
  RotateCcw,
  Star,
  X,
} from 'lucide-react-native';

const FilterBottomSheet = ({ onApply }) => {
  const bottomSheetRef = useRef(null);

  // =====================================================
  // Bottom Sheet
  // =====================================================

  const snapPoints = useMemo(() => ['85%'], []);

  // =====================================================
  // Filter State
  // =====================================================

  const [selectedCategory, setSelectedCategory] = useState('All');

  const [selectedSort, setSelectedSort] = useState('Popular');

  const [selectedPrice, setSelectedPrice] = useState('All');

  const [selectedRating, setSelectedRating] = useState('All');

  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // =====================================================
  // Filter Options
  // =====================================================

  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Shoes',
    'Accessories',
    'Home',
  ];

  const sortOptions = [
    'Popular',
    'Newest',
    'Price: Low to High',
    'Price: High to Low',
  ];

  const priceOptions = [
    'All',
    'Under ₹500',
    '₹500 - ₹1,000',
    '₹1,000 - ₹5,000',
    'Above ₹5,000',
  ];

  const ratingOptions = ['All', '4★ & above', '3★ & above', '2★ & above'];

  // =====================================================
  // Open / Close
  // =====================================================

  const open = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const close = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // =====================================================
  // Reset Filters
  // =====================================================

  const resetFilters = useCallback(() => {
    setSelectedCategory('All');
    setSelectedSort('Popular');
    setSelectedPrice('All');
    setSelectedRating('All');
    setOnlyAvailable(false);
  }, []);

  // =====================================================
  // Apply Filters
  // =====================================================

  const applyFilters = useCallback(() => {
    const filters = {
      category: selectedCategory,
      sort: selectedSort,
      price: selectedPrice,
      rating: selectedRating,
      onlyAvailable,
    };

    console.log('Applied Filters:', filters);

    onApply?.(filters);

    close();
  }, [
    selectedCategory,
    selectedSort,
    selectedPrice,
    selectedRating,
    onlyAvailable,
    onApply,
    close,
  ]);

  // =====================================================
  // Backdrop
  // =====================================================

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    [],
  );

  // =====================================================
  // Reusable Option
  // =====================================================

  const Option = ({ label, selected, onPress, icon }) => {
    return (
      <Pressable
        onPress={onPress}
        className={`min-h-[52px] flex-row items-center justify-between rounded-xl border px-[14px] ${
          selected
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-200 bg-slate-50'
        }`}
        style={({ pressed }) => ({
          opacity: pressed ? 0.7 : 1,
        })}
      >
        <View className="flex-row items-center gap-[10px]">
          {icon && <View className="w-7 items-center">{icon}</View>}

          <Text
            className={`text-sm font-semibold ${
              selected ? 'font-bold text-blue-600' : 'text-gray-700'
            }`}
          >
            {label}
          </Text>
        </View>

        {selected && (
          <View className="h-6 w-6 items-center justify-center rounded-full bg-blue-600">
            <Check size={16} color="#FFFFFF" strokeWidth={3} />
          </View>
        )}
      </Pressable>
    );
  };

  // =====================================================
  // Section
  // =====================================================

  const Section = ({ title, children }) => {
    return (
      <View className="mb-[26px]">
        <Text className="mb-3 text-base font-extrabold text-gray-900">
          {title}
        </Text>

        <View className="gap-2">{children}</View>
      </View>
    );
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <>
      {/* =================================================
          OPEN FILTER BUTTON
      ================================================= */}

      <Pressable
        onPress={open}
        className="h-12 flex-row items-center justify-center gap-2 rounded-xl bg-blue-600 px-[18px]"
        style={({ pressed }) => ({
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Filter size={20} color="#FFFFFF" />

        <Text className="text-base font-bold text-white">Filters</Text>

        <ChevronDown size={18} color="#FFFFFF" />
      </Pressable>

      {/* =================================================
          BOTTOM SHEET
      ================================================= */}

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustResize"
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{
          width: 42,
          height: 5,
          borderRadius: 10,
          backgroundColor: '#D1D5DB',
        }}
        backgroundStyle={{
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <View className="flex-1">
          {/* =================================================
              HEADER
          ================================================= */}

          <View className="min-h-[76px] flex-row items-center justify-between border-b border-slate-100 px-5">
            <View className="flex-row items-center gap-3">
              {/* Header Icon */}

              <View className="h-[42px] w-[42px] items-center justify-center rounded-xl bg-blue-50">
                <Filter size={20} color="#2563EB" />
              </View>

              {/* Header Text */}

              <View>
                <Text className="text-xl font-extrabold text-gray-900">
                  Filters
                </Text>

                <Text className="mt-[2px] text-[13px] text-gray-500">
                  Refine your search
                </Text>
              </View>
            </View>

            {/* Close Button */}

            <Pressable
              onPress={close}
              hitSlop={10}
              className="h-10 w-10 items-center justify-center rounded-full bg-gray-100"
              style={({ pressed }) => ({
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <X size={22} color="#374151" />
            </Pressable>
          </View>

          {/* =================================================
              SCROLLABLE CONTENT
          ================================================= */}

          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            contentContainerClassName="px-5 pb-5 pt-5"
          >
            {/* =================================================
                CATEGORY
            ================================================= */}

            <Section title="Category">
              <View className="flex-row flex-wrap gap-[10px]">
                {categories.map(category => {
                  const selected = selectedCategory === category;

                  return (
                    <Pressable
                      key={category}
                      onPress={() => setSelectedCategory(category)}
                      className={`min-h-[42px] items-center justify-center rounded-[22px] border px-4 ${
                        selected
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 bg-gray-100'
                      }`}
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.7 : 1,
                      })}
                    >
                      <Text
                        className={`text-sm font-semibold ${
                          selected ? 'font-bold text-blue-600' : 'text-gray-600'
                        }`}
                      >
                        {category}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </Section>

            {/* =================================================
                SORT
            ================================================= */}

            <Section title="Sort By">
              {sortOptions.map(option => (
                <Option
                  key={option}
                  label={option}
                  selected={selectedSort === option}
                  onPress={() => setSelectedSort(option)}
                />
              ))}
            </Section>

            {/* =================================================
                PRICE
            ================================================= */}

            <Section title="Price Range">
              {priceOptions.map(option => (
                <Option
                  key={option}
                  label={option}
                  selected={selectedPrice === option}
                  onPress={() => setSelectedPrice(option)}
                />
              ))}
            </Section>

            {/* =================================================
                RATING
            ================================================= */}

            <Section title="Rating">
              {ratingOptions.map(option => (
                <Option
                  key={option}
                  label={option}
                  selected={selectedRating === option}
                  onPress={() => setSelectedRating(option)}
                  icon={
                    option !== 'All' ? (
                      <Star
                        size={17}
                        color={
                          selectedRating === option ? '#2563EB' : '#F59E0B'
                        }
                        fill="#F59E0B"
                      />
                    ) : null
                  }
                />
              ))}
            </Section>

            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <Section title="Availability">
              <Pressable
                onPress={() => setOnlyAvailable(value => !value)}
                className="min-h-[66px] flex-row items-center justify-between rounded-xl border border-gray-200 bg-slate-50 px-[14px]"
                style={({ pressed }) => ({
                  opacity: pressed ? 0.7 : 1,
                })}
              >
                <View>
                  <Text className="text-sm font-bold text-gray-900">
                    Only show available products
                  </Text>

                  <Text className="mt-1 text-xs text-gray-500">
                    Hide currently unavailable items
                  </Text>
                </View>

                {/* Switch */}

                <View
                  className={`h-7 w-12 justify-center rounded-full p-[3px] ${
                    onlyAvailable ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <View
                    className={`h-[22px] w-[22px] rounded-full bg-white ${
                      onlyAvailable ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </View>
              </Pressable>
            </Section>

            {/* Bottom spacing */}

            <View className="h-5" />
          </BottomSheetScrollView>

          {/* =================================================
              FOOTER
          ================================================= */}

          <View className="min-h-[78px] flex-row items-center gap-3 border-t border-gray-200 bg-white px-5 py-[14px]">
            {/* Reset */}

            <Pressable
              onPress={resetFilters}
              className="h-12 flex-row items-center justify-center gap-2 rounded-xl bg-gray-100 px-[18px]"
              style={({ pressed }) => ({
                opacity: pressed ? 0.75 : 1,
              })}
            >
              <RotateCcw size={18} color="#374151" />

              <Text className="text-[15px] font-bold text-gray-700">Reset</Text>
            </Pressable>

            {/* Apply */}

            <Pressable
              onPress={applyFilters}
              className="h-12 flex-1 flex-row items-center justify-center gap-2 rounded-xl bg-blue-600"
              style={({ pressed }) => ({
                opacity: pressed ? 0.75 : 1,
              })}
            >
              <Filter size={18} color="#FFFFFF" />

              <Text className="text-[15px] font-extrabold text-white">
                Apply Filters
              </Text>
            </Pressable>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default FilterBottomSheet;

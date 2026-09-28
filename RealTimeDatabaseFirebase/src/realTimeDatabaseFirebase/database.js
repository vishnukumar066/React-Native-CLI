import {
  getDatabase,
  ref,
  get,
  push,
  set,
  update,
  remove,
  onValue,
  off,
} from '@react-native-firebase/database';

const db = getDatabase();

const itemsRef = ref(db, 'items');

/**
 * ADD ITEM
 */
export const addItem = async itemData => {
  try {
    const newItemRef = push(itemsRef);

    const item = {
      id: newItemRef.key,
      ...itemData,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await set(newItemRef, item);

    return {
      success: true,
      data: item,
    };
  } catch (error) {
    console.error('addItem error:', error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/**
 * GET SINGLE ITEM
 */
export const getItem = async itemId => {
  try {
    const itemRef = ref(db, `items/${itemId}`);

    const snapshot = await get(itemRef);

    if (!snapshot.exists()) {
      return {
        success: false,
        data: null,
        error: 'Item not found',
      };
    }

    return {
      success: true,
      data: snapshot.val(),
    };
  } catch (error) {
    console.error('getItem error:', error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/**
 * GET ALL ITEMS
 */
export const getAllItems = async () => {
  try {
    const snapshot = await get(itemsRef);

    if (!snapshot.exists()) {
      return [];
    }

    const data = snapshot.val();

    return Object.values(data);
  } catch (error) {
    console.error('getAllItems error:', error);

    throw error;
  }
};

/**
 * UPDATE ITEM
 */
export const updateItem = async (itemId, itemData) => {
  try {
    const itemRef = ref(db, `items/${itemId}`);

    await update(itemRef, {
      ...itemData,
      updatedAt: Date.now(),
    });

    return {
      success: true,
      message: 'Item updated successfully',
    };
  } catch (error) {
    console.error('updateItem error:', error);

    throw error;
  }
};

/**
 * DELETE ITEM
 */
export const deleteItem = async itemId => {
  try {
    const itemRef = ref(db, `items/${itemId}`);

    await remove(itemRef);

    return {
      success: true,
      message: 'Item deleted successfully',
    };
  } catch (error) {
    console.error('deleteItem error:', error);

    throw error;
  }
};

/**
 * REAL-TIME LISTENER
 */
export const subscribeToItems = callback => {
  const listener = snapshot => {
    if (!snapshot.exists()) {
      callback([]);
      return;
    }

    const data = snapshot.val();

    const items = Object.values(data);

    callback(items);
  };

  onValue(itemsRef, listener);

  return () => {
    off(itemsRef, 'value', listener);
  };
};

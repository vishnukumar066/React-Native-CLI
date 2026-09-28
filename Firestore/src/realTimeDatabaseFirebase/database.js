import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from '@react-native-firebase/firestore';

const db = getFirestore();
const itemsCollection = collection(db, 'items');

export const addItem = async itemData => {
  try {
    const itemReference = await addDoc(itemsCollection, itemData);

    return {
      success: true,
      id: itemReference.id,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

// GET SINGLE ITEM
export const getItem = async itemId => {
  try {
    const itemReference = doc(itemsCollection, itemId);

    const itemSnapshot = await getDoc(itemReference);

    if (!itemSnapshot.exists()) {
      return null;
    }

    return {
      id: itemSnapshot.id,
      ...itemSnapshot.data(),
    };
  } catch (error) {
    console.error('Error getting item:', error);
    throw error;
  }
};

// GET ALL ITEMS
export const getAllItems = async () => {
  try {
    const querySnapshot = await getDocs(itemsCollection);

    const items = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data(),
    }));

    return items;
  } catch (error) {
    console.error('Error getting all items:', error);
    throw error;
  }
};

// UPDATE ITEM
export const updateItem = async (itemId, itemData) => {
  try {
    const itemReference = doc(itemsCollection, itemId);

    await updateDoc(itemReference, itemData);

    console.log('Item updated:', itemId);

    return {
      success: true,
      id: itemId,
    };
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// DELETE ITEM
export const deleteItem = async itemId => {
  try {
    const itemReference = doc(itemsCollection, itemId);

    await deleteDoc(itemReference);

    console.log('Item deleted:', itemId);

    return {
      success: true,
      id: itemId,
    };
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

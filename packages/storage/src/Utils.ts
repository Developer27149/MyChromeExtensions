export const getFromStorage = async (key: string) => {
  return "";
};

export const saveToStorage = async (key: string, value: unknown) => {
  try {
    const oldValue = await getFromStorage(key);
  } catch (error) {}
};

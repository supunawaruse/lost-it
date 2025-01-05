import { Alert } from "react-native";

export const showErrorAlert = (errorMessage: string, errorType: string) => {
  Alert.alert(`${errorType} Error`, `${errorMessage}`, [{ text: "OK" }]);
};

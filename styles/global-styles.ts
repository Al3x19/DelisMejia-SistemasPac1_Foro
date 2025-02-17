import { StyleSheet } from 'react-native';
import { colors } from "@/constants/Colors";

const styles = StyleSheet.create({

    background:{
        backgroundColor: colors.background,
        flex: 1,
    },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGray,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.darkGray,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
    color: colors.darkGray,
  },
  buttonColor: {
    backgroundColor: colors.bluePastel,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  productName: {
    fontSize: 16,
    color: colors.darkGray,
  },
  status: {
    fontSize: 14,
    color: colors.mintGreen,
  },
  bought: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',
  },
});

export default styles;

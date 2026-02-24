import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#d2e6f8",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    backgroundColor: "#e6f0fa",
    borderRadius: 25,
    borderColor: "#7daee2",
    borderWidth: 4,
    padding: 10,
    marginBottom: 30,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#3e3e3e",
    backgroundColor: "#e6f0fa",
    marginBottom: 20,
    borderRadius: 15,
    borderColor: "#7daee2",
    borderWidth: 3,
    padding: 10,
    maxWidth: "80%",
  },

  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    marginBottom: 10,
  },

  navtab: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    tintColor: "#000000",
    width: 50,
    height: 50,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    gap: 15,
    marginTop: 20,
    width: "100%",
  },

  button: {
    backgroundColor: "#5a99dd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "#5a99dd",
    borderWidth: 1,
    minWidth: 100,
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  }
});

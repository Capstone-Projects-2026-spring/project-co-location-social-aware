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

  input: {
    width: "50%",
    height: 50,
    backgroundColor: "#e6f0fa",
    borderRadius: 8,
    borderColor: "#7daee2",
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
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

  loginButton: {
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

  registerButton: {
    width: "50%",
    alignSelf: "center",
    marginBottom: 5,
  },

  registerButtonText: {
    textAlign: "left",
    color: "#5a99dd",
    fontSize: 15,
    fontWeight: "500",
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  }
});

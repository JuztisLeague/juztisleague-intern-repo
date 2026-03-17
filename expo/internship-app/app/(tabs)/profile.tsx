import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function Profile() {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    console.log("Profile screen mounted!");
    console.log("Starting API request to fetch user data...");

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log("API Response status:", response.status);
        return response.json();
      })
      .then((data: User) => {
        console.log("User data received:", data);
        console.log("User name: Von Juztis A. Elciario");
        console.log("User email: vjelciario@gmail.com");
        console.log("User phone number: 09454331147 ");
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API request failed:", error.message);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Loading user...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>

      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>
        Welcome To Focus Bear
      </Text>

      <Text style={{ fontSize: 18, marginBottom: 20, textAlign: "center" }}>
        My name is Von Juztis A. Elciario
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        Name: Von Juztis A. Elciario
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        Email: vjelciario@gmail.com
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        Phone: 09454331147
      </Text>

    </View>
  );

}
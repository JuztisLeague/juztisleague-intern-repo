// app/(tabs)/profile/index.tsx
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Pressable, Linking } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function Profile() {

  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const testDeepLink = (userId: number) => {
    router.push(`/(tabs)/profile/${userId}`);
  };

  useEffect(() => {

    console.log("Profile screen mounted!");
    console.log("Deep Link ID:", id);

    const userId = id ? id : 1;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        console.log("API Response status:", response.status);
        return response.json();
      })
      .then((data: User) => {
        console.log("User data received:", data);
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API request failed:", error.message);
        setLoading(false);
      });

  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading user...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome To Focus Bear</Text>
      <Text style={styles.subtitle}>Dynamic Profile Loaded via Deep Link</Text>

      <View style={styles.card}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>22102112</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Von Juztis A. Elciario</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>vjelciario@gmail.com</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>09454331147</Text>
      </View>

      {/* ── Deep Link Tester Section ── */}
      <Text style={styles.testerTitle}>Deep Link Tester</Text>
      <Text style={styles.testerSubtitle}>Tap a button to load a different profile</Text>

      <View style={styles.buttonRow}>
        {[1, 2, 3, 4, 5].map((userId) => (
          <Pressable
            key={userId}
            style={styles.button}
            onPress={() => testDeepLink(userId)}
          >
            <Text style={styles.buttonText}>#{userId}</Text>
          </Pressable>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#555",
  },

  // ── User card ──
  card: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    gap: 4,
  },
  label: {
    fontSize: 12,
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: "#111",
  },

  // ── Tester section ──
  testerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  testerSubtitle: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    minWidth: 56,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
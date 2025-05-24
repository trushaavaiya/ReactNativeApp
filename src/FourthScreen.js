import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function APP() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      await new Promise(resolve => setTimeout(resolve, 2000));

      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      setError("Failed to fetch post list");
      console.log();
    }
  }; // 👈 missing bracket was added here

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData(20);
    setRefreshing(false);
    console.log();
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        })
      });
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle(""); // clear input
      setPostBody("");  // clear input
      setIsPosting(false);
      setError("");
    } catch (error) {
      console.error("Error adding new post:", error);
      setError("Failed to add new post");
      setIsPosting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={style.loadingcontainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      {error ? (
        <View style={style.errorcontainer}>
          <Text style={style.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={style.inputcontainer}>
            <TextInput
              style={style.input}
              placeholder="Post title"
              placeholderTextColor="#999"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={style.input}
              placeholder="Post body" // fixed typo here
              placeholderTextColor="#999"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? "Adding..." : "Add Post"}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>

          <View style={style.listcontainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => {
                return (
                  <View style={style.card}>
                    <Text style={style.titleText}>{item.title}</Text>
                    <Text style={style.bodyText}>{item.body}</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id?.toString() || Math.random().toString()} // added key extractor
              ItemSeparatorComponent={() => (
                <View style={{ height: 16 }} />
              )}
              ListEmptyComponent={<Text>No posts found</Text>}
              ListHeaderComponent={<Text style={style.headerText}>Post List</Text>}
              ListFooterComponent={<Text style={style.footerText}>End of list</Text>}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight
  },
  listcontainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
  loadingcontainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputcontainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
    color: "black",
  },
  headerText: {
    alignSelf: "center",
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  footerText: {
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "#999",
  },
  errorcontainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center",
  },
});

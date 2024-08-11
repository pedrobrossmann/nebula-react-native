import { CarouselComponent } from "@/components/Carousel";
import { Input } from "@/components/Input";
import { ProductCard } from "@/components/ProductCard";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style= {styles.wrapper}>
        <View style={styles.input}>
          <Input placeholder="Pesquisar" iconName="search-outline"></Input>
        </View>
      </View>

      <View style={styles.lineSeparator}>
        <CarouselComponent></CarouselComponent>
        <ProductCard></ProductCard>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#FFF'
  },
  wrapper: {
    marginTop: 32,
  },
  input: {
    marginHorizontal: 8,
  },
  lineSeparator: {
    height: 1,
    backgroundColor: '#EBF8FF',
    marginVertical: 1,
  },
})


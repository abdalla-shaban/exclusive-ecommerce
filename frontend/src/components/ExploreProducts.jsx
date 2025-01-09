import ProductsList from "./ProductsList";
import SectionHeader from "./SectionHeader";

export default function ExploreProducts() {
  return (
    <section className="my-5 py-5">
      <div className="tb-container">
        <SectionHeader
          header={"Our Products"}
          title={"Explore Our Products"}
          path={""}
        />
        <ProductsList />
      </div>
    </section>
  );
}

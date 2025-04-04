
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Filter, SortDesc } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { products, Product } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [sortOption, setSortOption] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Parse URL search params on mount and when URL changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initialFilters: Record<string, any> = {};

    // Get all filter values from URL
    if (searchParams.has("category")) {
      initialFilters.category = searchParams.getAll("category");
    }
    if (searchParams.has("brand")) {
      initialFilters.brand = searchParams.getAll("brand");
    }
    if (searchParams.has("gender")) {
      initialFilters.gender = searchParams.getAll("gender");
    }
    if (searchParams.has("colors")) {
      initialFilters.colors = searchParams.getAll("colors");
    }
    if (searchParams.has("minPrice")) {
      initialFilters.minPrice = Number(searchParams.get("minPrice"));
    }
    if (searchParams.has("maxPrice")) {
      initialFilters.maxPrice = Number(searchParams.get("maxPrice"));
    }
    if (searchParams.has("new")) {
      initialFilters.new = searchParams.get("new") === "true";
    }
    if (searchParams.has("sale")) {
      initialFilters.sale = searchParams.get("sale") === "true";
    }
    if (searchParams.has("search")) {
      initialFilters.search = searchParams.get("search");
    }
    if (searchParams.has("sort")) {
      setSortOption(searchParams.get("sort") || "featured");
    }

    setFilters(initialFilters);
  }, [location.search]);

  // Apply filters and sort when filters or sort option changes
  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Apply category filter
    if (filters.category && filters.category.length > 0) {
      result = result.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    // Apply brand filter
    if (filters.brand && filters.brand.length > 0) {
      result = result.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }

    // Apply gender filter
    if (filters.gender && filters.gender.length > 0) {
      result = result.filter((product) =>
        filters.gender.includes(product.gender)
      );
    }

    // Apply color filter
    if (filters.colors && filters.colors.length > 0) {
      result = result.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color))
      );
    }

    // Apply price filter
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      const minPrice = filters.minPrice ?? 0;
      const maxPrice = filters.maxPrice ?? Number.MAX_SAFE_INTEGER;
      result = result.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    // Apply new filter
    if (filters.new) {
      result = result.filter((product) => product.new);
    }

    // Apply sale filter
    if (filters.sale) {
      result = result.filter((product) => product.sale);
    }

    // Apply sorting
    if (sortOption === "price-low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-to-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      result.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));
    } else if (sortOption === "best-rated") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "most-reviewed") {
      result.sort((a, b) => b.reviews - a.reviews);
    }
    // "featured" sorting is default

    setFilteredProducts(result);
  }, [filters, sortOption]);

  const handleFilterChange = (newFilters: Record<string, any>) => {
    setFilters(newFilters);

    // Update URL search parameters
    const searchParams = new URLSearchParams();

    // Add filter values to URL
    if (newFilters.category?.length) {
      newFilters.category.forEach((cat: string) => {
        searchParams.append("category", cat);
      });
    }
    if (newFilters.brand?.length) {
      newFilters.brand.forEach((b: string) => {
        searchParams.append("brand", b);
      });
    }
    if (newFilters.gender?.length) {
      newFilters.gender.forEach((g: string) => {
        searchParams.append("gender", g);
      });
    }
    if (newFilters.colors?.length) {
      newFilters.colors.forEach((c: string) => {
        searchParams.append("colors", c);
      });
    }
    if (newFilters.minPrice !== undefined) {
      searchParams.append("minPrice", newFilters.minPrice.toString());
    }
    if (newFilters.maxPrice !== undefined) {
      searchParams.append("maxPrice", newFilters.maxPrice.toString());
    }
    if (newFilters.new) {
      searchParams.append("new", "true");
    }
    if (newFilters.sale) {
      searchParams.append("sale", "true");
    }
    if (newFilters.search) {
      searchParams.append("search", newFilters.search);
    }
    if (sortOption !== "featured") {
      searchParams.append("sort", sortOption);
    }

    // Update URL without reloading the page
    navigate({
      pathname: "/products",
      search: searchParams.toString(),
    });
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);

    // Update URL with sort parameter
    const searchParams = new URLSearchParams(location.search);
    if (value === "featured") {
      searchParams.delete("sort");
    } else {
      searchParams.set("sort", value);
    }
    navigate({
      pathname: "/products",
      search: searchParams.toString(),
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      {/* Sort & Filter Action Bar */}
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="flex items-center mb-4 w-full sm:mb-0 sm:w-auto">
          <Button
            variant="outline"
            onClick={() => setShowMobileFilters(true)}
            className="mr-4 sm:mr-0 lg:hidden"
          >
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex w-full sm:w-auto items-center">
          <span className="text-sm mr-2">Sort by:</span>
          <Select value={sortOption} onValueChange={handleSortChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="best-rated">Best Rated</SelectItem>
              <SelectItem value="most-reviewed">Most Reviewed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content with Filters and Product Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <ProductFilter
            onFilterChange={handleFilterChange}
            currentFilters={filters}
            isOpen={showMobileFilters}
            onClose={() => setShowMobileFilters(false)}
          />
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-muted-foreground mb-6">
                Try changing your filters or search terms.
              </p>
              <Button variant="outline" onClick={() => handleFilterChange({})}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

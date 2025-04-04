
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Check, ChevronDown, FilterX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { filterOptions } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterProps {
  onFilterChange: (filters: Record<string, any>) => void;
  currentFilters: Record<string, any>;
  isOpen: boolean;
  onClose: () => void;
}

const ProductFilter: React.FC<FilterProps> = ({
  onFilterChange,
  currentFilters,
  isOpen,
  onClose,
}) => {
  const [priceRange, setPriceRange] = useState<number[]>([
    currentFilters.minPrice || filterOptions.minPrice,
    currentFilters.maxPrice || filterOptions.maxPrice,
  ]);
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterClear = () => {
    const clearedFilters = {};
    onFilterChange(clearedFilters);
    
    // Reset URL
    navigate("/products");
  };

  const handleCheckboxChange = (category: string, value: string) => {
    let updatedValues: string[];

    if (currentFilters[category]?.includes(value)) {
      updatedValues = currentFilters[category].filter((v: string) => v !== value);
    } else {
      updatedValues = [...(currentFilters[category] || []), value];
    }

    if (updatedValues.length === 0) {
      const { [category]: _, ...rest } = currentFilters;
      onFilterChange(rest);
    } else {
      onFilterChange({
        ...currentFilters,
        [category]: updatedValues,
      });
    }
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  const applyPriceFilter = () => {
    onFilterChange({
      ...currentFilters,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  };

  const filterCount = Object.keys(currentFilters).filter(key => 
    key !== "sort" && 
    ((Array.isArray(currentFilters[key]) && currentFilters[key].length > 0) || 
    (!Array.isArray(currentFilters[key]) && currentFilters[key] !== undefined))
  ).length;

  return (
    <div className={`
      lg:block 
      ${isOpen ? 'fixed inset-0 z-50 bg-background p-6 overflow-auto' : 'hidden'} 
      lg:relative lg:z-auto lg:bg-transparent lg:p-0
    `}>
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="flex gap-2">
          {filterCount > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleFilterClear}
              className="text-xs"
            >
              <FilterX className="mr-1 h-4 w-4" />
              Clear All
            </Button>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="lg:hidden"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Price Range Filter */}
        <div>
          <h3 className="text-sm font-medium mb-3">Price Range</h3>
          <Slider
            defaultValue={[
              currentFilters.minPrice || filterOptions.minPrice,
              currentFilters.maxPrice || filterOptions.maxPrice,
            ]}
            min={filterOptions.minPrice}
            max={filterOptions.maxPrice}
            step={5}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mb-4"
          />
          <div className="flex items-center justify-between">
            <div className="text-sm">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
            <Button size="sm" onClick={applyPriceFilter} variant="outline">
              Apply
            </Button>
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="lg:hidden space-y-4">
          {/* Categories Mobile Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Categories <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {filterOptions.categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={currentFilters.category?.includes(category)}
                  onCheckedChange={() => handleCheckboxChange("category", category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Brands Mobile Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Brands <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {filterOptions.brands.map((brand) => (
                <DropdownMenuCheckboxItem
                  key={brand}
                  checked={currentFilters.brand?.includes(brand)}
                  onCheckedChange={() => handleCheckboxChange("brand", brand)}
                >
                  {brand}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Gender Mobile Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Gender <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {filterOptions.genders.map((gender) => (
                <DropdownMenuCheckboxItem
                  key={gender}
                  checked={currentFilters.gender?.includes(gender)}
                  onCheckedChange={() => handleCheckboxChange("gender", gender)}
                >
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Colors Mobile Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Colors <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {filterOptions.colors.map((color) => (
                <DropdownMenuCheckboxItem
                  key={color}
                  checked={currentFilters.colors?.includes(color)}
                  onCheckedChange={() => handleCheckboxChange("colors", color)}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:block">
          <Accordion type="multiple" defaultValue={["categories", "brands", "gender", "colors"]}>
            {/* Categories */}
            <AccordionItem value="categories">
              <AccordionTrigger className="text-sm font-medium">Categories</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-1">
                  {filterOptions.categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={currentFilters.category?.includes(category) || false}
                        onChange={() => handleCheckboxChange("category", category)}
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Brands */}
            <AccordionItem value="brands">
              <AccordionTrigger className="text-sm font-medium">Brands</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-1">
                  {filterOptions.brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={currentFilters.brand?.includes(brand) || false}
                        onChange={() => handleCheckboxChange("brand", brand)}
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Gender */}
            <AccordionItem value="gender">
              <AccordionTrigger className="text-sm font-medium">Gender</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-1">
                  {filterOptions.genders.map((gender) => (
                    <label
                      key={gender}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={currentFilters.gender?.includes(gender) || false}
                        onChange={() => handleCheckboxChange("gender", gender)}
                      />
                      <span className="text-sm">
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Colors */}
            <AccordionItem value="colors">
              <AccordionTrigger className="text-sm font-medium">Colors</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-1">
                  {filterOptions.colors.map((color) => (
                    <label
                      key={color}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={currentFilters.colors?.includes(color) || false}
                        onChange={() => handleCheckboxChange("colors", color)}
                      />
                      <span className="text-sm">
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

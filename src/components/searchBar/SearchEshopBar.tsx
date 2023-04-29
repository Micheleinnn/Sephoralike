import React, { useState, useEffect } from "react";
import { Box, Select, Input } from "@chakra-ui/react";
import data from "../../helpers/data.json";

const SearchEshopBar = ({ onFilterChange }) => {
  const [items, setItems] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [usageFilter, setUsageFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  useEffect(() => {
    setItems(data);
  }, []);

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
    onFilterChange({
      price: e.target.value,
      usage: usageFilter,
      brand: brandFilter,
    });
  };

  const handleUsageFilterChange = (e) => {
    setUsageFilter(e.target.value);
    onFilterChange({
      price: priceFilter,
      usage: e.target.value,
      brand: brandFilter,
    });
  };

  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
    onFilterChange({
      price: priceFilter,
      usage: usageFilter,
      brand: e.target.value,
    });
  };

  return (
    <Box display="flex" alignItems="center">
      <Select placeholder="Price" mr="2" onChange={handlePriceFilterChange}>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </Select>
      <Select placeholder="Usage" mr="2" onChange={handleUsageFilterChange}>
        <option value="option1">Face</option>
        <option value="option2">Lips</option>
        <option value="option3">Eyes</option>
      </Select>
      <Input placeholder="Brand" mr="2" onChange={handleBrandFilterChange} />
    </Box>
  );
};

export default SearchEshopBar;

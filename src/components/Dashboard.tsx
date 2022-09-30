import { Box, HStack, Select, Text } from "@chakra-ui/react";
import { FilterByCategory, FilterByPrice } from "./types";

interface Props {
  active: FilterByPrice;
  onChange: (filter: FilterByPrice) => void;
}

function Dashboard({ active, onChange }: Props) {
  const FILTERS: FilterByPrice[] = [
    // Filter.MostRecent,
    FilterByPrice.HighestPrice,
    FilterByPrice.LowestPrice,
  ];
  const FILTER_CATEGORY: FilterByCategory[] = [
    FilterByCategory.All,
    FilterByCategory.Audio,
    FilterByCategory.Cameras,
    FilterByCategory.Laptops,
    FilterByCategory.TabletsAndEReaders,
    FilterByCategory.PhoneAccessories,
    FilterByCategory.Phones,
    FilterByCategory.PCAccessories,
    FilterByCategory.Gaming,
    FilterByCategory.SmartHome,
    FilterByCategory.MonitorsAndTv,
    FilterByCategory.Drones,
  ];
  return (
    <HStack w={"100%"} justify={"space-between"} py={4}>
      <HStack maxW={"1200px"} w={"100%"} m={"0 auto"}>
        <Text>Filter by</Text>
        <Select maxW={180} borderColor={"#0DD4FA"} cursor={"pointer"}>
          {FILTER_CATEGORY.map((option) => {
            return (
              <option
                key={option}
                value={option}
                // selected={active === option}
                style={{ cursor: "pointer", padding: "10px" }}
              >
                {option}
              </option>
            );
          })}
        </Select>
        <Text color={"gray.400"} fontWeight={500}>
          Sort by:{" "}
        </Text>
        {FILTERS.map((filter) => {
          return (
            <Box
              key={filter}
              onClick={() => onChange(filter)}
              borderRadius={15}
              px={4}
              py={1.5}
              cursor={"pointer"}
              bg={active === filter ? "#0DD4FA" : "gray.200"}
              color={active === filter ? "white" : "gray.500"}
            >
              {filter}
            </Box>
          );
        })}
      </HStack>
    </HStack>
  );
}

export default Dashboard;

import { Box, Button, HStack, Select, Text } from "@chakra-ui/react";
import { FilterByCategory, FilterByPrice } from "./types";

interface Props {
  active: FilterByPrice;
  onChange: (filter: FilterByPrice) => void;
  onChangeCategory: (category: FilterByCategory) => void;
  productsAmount: number;
  page: number;
  setPage: (page: number) => void;
}

function Dashboard({
  active,
  onChange,
  onChangeCategory,
  productsAmount,
  page,
  setPage,
}: Props) {
  // Pagination
  const TOTAL_PAGES = Math.ceil(productsAmount / 16);
  const handleNextPage = () => {
    if (page < TOTAL_PAGES) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const FILTERS: FilterByPrice[] = [
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
    FilterByCategory.PCAccesories,
    FilterByCategory.Gaming,
    FilterByCategory.SmartHome,
    FilterByCategory.MonitorsAndTv,
    FilterByCategory.Drones,
  ];

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    onChangeCategory(e.target.value as FilterByCategory);
  };

  return (
    <HStack
      w={"100%"}
      maxW={"1200px"}
      justify={"space-between"}
      py={4}
      m={"0 auto"}
    >
      <HStack w={"100%"}>
        <Text>Filter by</Text>
        <Select
          onChange={selectCategory}
          maxW={180}
          borderColor={"#0DD4FA"}
          cursor={"pointer"}
        >
          {FILTER_CATEGORY.map((option) => {
            return (
              <option
                key={option}
                value={option}
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
      <HStack>
        <Button onClick={handlePrevPage} disabled={page === 1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#94a3b8"
            strokeWidth="2"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
              stroke="#94A3B8"
              fill="none"
              strokeWidth="2px"
            ></path>
          </svg>
        </Button>
        <Text whiteSpace={"nowrap"} fontSize={14}>
          {" "}
          Page {page} of {TOTAL_PAGES}{" "}
        </Text>
        <Button
          onClick={handleNextPage}
          disabled={page === 2 || TOTAL_PAGES === 1 ? true : false}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#94a3b8"
            strokeWidth="2"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
              stroke="#94A3B8"
              fill="none"
              strokeWidth="2px"
            ></path>
          </svg>
        </Button>
      </HStack>
    </HStack>
  );
}

export default Dashboard;

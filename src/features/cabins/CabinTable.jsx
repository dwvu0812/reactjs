/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { CabinRow } from "./CabinRow";
import { useCabin } from "./useCabin";
import { useEffect } from "react";
import Empty from "../../ui/Empty";

export const CabinTable = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, cabins } = useCabin();

  const filteredValue = searchParams.get("discount") || "all";

  // Filter
  let filteredCabins;

  // switch (filteredValue) {
  //   case "all":
  //     filteredCabins = cabins;
  //     break;
  //   case "no-discount":
  //     filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  //     break;
  //   case "with-discount":
  //     filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
  //     break;
  //   default:
  //     filteredCabins = cabins;
  //     break;
  // }

  if (filteredValue === "all") filteredCabins = cabins;
  if (filteredValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filteredValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // Sort
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = Array.isArray(filteredCabins)
    ? filteredCabins?.sort((a, b) => (a[field] - b[field]) * modifier)
    : [];

  // let sortedCabins = [];
  // useEffect(() => {
  //   if (field) {
  //     sortedCabins = filteredCabins?.sort((a, b) => a[field] - b[field]);
  //   }
  // }, [field]);

  if (!sortedCabins.length) return <Empty resource={"cabins"} />;
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
};

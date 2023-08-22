import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { CabinRow } from "./CabinRow";
import { useCabin } from "./useCabin";

export const CabinTable = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, cabins } = useCabin();

  const filteredValue = searchParams.get("discount") || "all";

  console.log(filteredValue);

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

  console.log(filteredCabins);

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
          data={filteredCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
};

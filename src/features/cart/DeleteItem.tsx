import { useAppDispatch } from "../../store/hooks";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem: React.FC<{ pizzaId: string }> = ({ pizzaId }) => {
  const dispatch = useAppDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
};

export default DeleteItem;

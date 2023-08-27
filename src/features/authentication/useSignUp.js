import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signUp as signUpApi } from "../../services/apiAuth";

export function useSignUp() {
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signUpApi({ email, password, fullName }),
    onSuccess: () => {
      toast.success(
        "Account successfully created. Please verify your account from user's email address"
      );
    },
  });

  return { signUp, isLoading };
}

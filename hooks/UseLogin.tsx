import { postData } from "@/services/MainApi";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: ({formData}:{formData:FormData})=>postData('/auth/login', formData),
    onSuccess: (data) => {
        console.log(data)
    },
    onError: (error) => {
        console.log(error)
    }   
  })
};


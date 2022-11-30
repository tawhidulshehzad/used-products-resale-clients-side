import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isSeller, setISeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://bookworm-server.vercel.app/users/sellers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          
          setISeller(data.isSeller);
          
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useAdmin;

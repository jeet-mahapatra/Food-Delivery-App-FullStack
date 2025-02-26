import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // ✅ Validate URL parameters before making the request
        if (!success || !orderId) {
          console.error("Missing success or orderId in URL parameters");
          navigate("/");
          return;
        }

        // ✅ API call inside try-catch for error handling
        const response = await axios.post(`${url}/api/order/verify`, { success, orderId });

        console.log("Payment Success:", success);
        console.log("Order ID:", orderId);
        console.log("API Response:", response.data);

        // ✅ Redirect based on API response
        if (response.data.success) {
          navigate("/myorders");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        navigate("/");
      }
    };

    verifyPayment();
  }, [success, orderId, url, navigate]); // ✅ Dependencies added

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;

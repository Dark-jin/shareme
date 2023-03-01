import React, { useEffect } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";

const { VITE_APP_TOSSPAY_KEY } = import.meta.env;
const clientKey = VITE_APP_TOSSPAY_KEY;
const customKey = "test123";

const Tosspay = () => {
  async function tosspay() {
    const paymentWidget = await loadPaymentWidget(clientKey, customKey); // 회원 결제
    const nopaymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
    //paymentWidget.renderPaymentMethods("#payment-method", 15000);
    paymentWidget.requestPayment({
      orderId: "AD8aZDpbzXs4EQa-UkIX6",
      orderName: "토스 티셔츠 외 2건",
      successUrl: "http://localhost:8080/success",
      failUrl: "http://localhost:8080/fail",
      customerEmail: "customer123@gmail.com",
      customerName: "김토스",
    });
  }
  useEffect(() => {
    tosspay;
  }, []);
  return (
    <>
      <h1>TossPayment Widget</h1>
    </>
  );
};
export default Tosspay;

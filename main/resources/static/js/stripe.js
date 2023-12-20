const stripe = Stripe('pk_test_51OLdVIIZ2qOtb8mcb9nthgkcyh28Cv2hfWxQgtGu3YO8Fgs755wAzyVZUEZFaqOPr0SKuQqMVz5ygh2aYFH09IpM00zNGOZrsM');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });

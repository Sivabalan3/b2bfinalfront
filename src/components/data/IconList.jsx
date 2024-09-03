import gpay from "../../assets/icons/gpay.png"
import phonepe from "../../assets/icons/phonepe-icon.png"
import paytm from "../../assets/icons/paytm.png"
import paypal from "../../assets/icons/paypal.png"
import visa from "../../assets/icons/visa.png"
import mcard from "../../assets/icons/mcard.png"



export const paymentMethods = [
    { id: 'gpay', name: 'GPay', img : gpay },
    { id: 'phonepe', name: 'PhonePe', img : phonepe },
    { id: 'paytm', name: 'Paytm', img : paytm },
    { id: 'paypal', name: 'PayPal',img : paypal },
  ];

export const debitMethods =[
    {
        id:'visa',name:'Visa',img:visa,
    },
    {
        id:'mcard',name:'MasterCard',img:mcard,
    }

]


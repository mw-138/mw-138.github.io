import SubscriptionType from "../types/SubscriptionType";

export default interface Subscription {
  id: string;
  label: string;
  price: number;
  type: SubscriptionType;
  firstPaymentDate: string;
}

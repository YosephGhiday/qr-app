export interface QR {
  amount: number;
  service: "ACTIVITY" | "FOOD" | "LEISURE" | "REWARD";
  amountInPoints: number;
  name: string;
}

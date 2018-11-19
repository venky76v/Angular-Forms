import { Address } from './address';
export class User {
  constructor(
    public userName: string,
    public userEmail: string,
    public userPhone: number,
    public userAddress: Address,
    public userTopic: string,
    public userTimePreference: string,
    public userSubscribe: boolean
  ) {}
}

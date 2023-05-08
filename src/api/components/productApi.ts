import AxiosClient from "../AxiosClient";
import { AxiosResponse } from "axios";

interface Account {
  // Định nghĩa các thuộc tính của đối tượng Account
}

const AccountApi = {
  getAll(params: any): Promise<AxiosResponse<Account[]>> {
    const url = "/accounts";
    return AxiosClient.get(url, { params });
  },
  add(data: Account): Promise<AxiosResponse<Account>> {
    const url = "/accounts/store";
    return AxiosClient.post(url, data);
  },
  checkUser(data: any): Promise<AxiosResponse<boolean>> {
    const url = "/accounts/checkUser";
    return AxiosClient.post(url, data);
  },

};

export default AccountApi;

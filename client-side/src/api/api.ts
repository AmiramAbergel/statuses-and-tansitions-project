import axios, { AxiosRequestConfig } from 'axios';

interface ClientAPIArgs {
  endPoint: string;
  method: string;
  data?: Transition | Status;
  params?: string;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const clientAPI = async (
  args: ClientAPIArgs
) => {
  try {
    const config: AxiosRequestConfig = { url: args.endPoint, method: args.method, data: args.data, params: args.params };
    const response = await api.request(config);
    return response.data;
  } catch (error) {
    // handle error here if needed
    throw error;
  }
};

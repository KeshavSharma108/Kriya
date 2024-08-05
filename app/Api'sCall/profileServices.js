import { RootApi } from ".";
import { SAVE_DEVICE_TOKEN } from "./ApiUrl";




export const saveDeviceToken = payload => {
  return RootApi({
    apiUrl: SAVE_DEVICE_TOKEN,
    payload,
    method: 'POST',
  });
};



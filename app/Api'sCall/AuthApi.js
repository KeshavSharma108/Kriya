import { LOGIN_URL } from "./ApiUrl"
import { RootApi } from "./RootApi"





export const login = payload => {
    return RootApi({
      method:'POST',
      apiUrl:LOGIN_URL,
      payload,
        
    })
}


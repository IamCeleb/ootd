import ApiInfo from "./baseAPI"

const BASE_URL = ApiInfo();

class AuthApi {
  async hello() {
    return fetch(`${BASE_URL}/hello`, {
      method: 'GET'
    })
  }
}

export const authApi = new AuthApi()



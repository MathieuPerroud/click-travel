
export const state = () => ({})

export const getters = {

}

export const mutations = {}

//get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
export const actions = {
    async getDreamDestinations() {
        let filter = { 
          "offset": 0,
          "limit": 100,
          "skip": 0,
          "where": {
          "isDreamDestination": true 
          }
        }
        let res = await this.$axios.get(process.env.DESTINATIONS_ROUTE, { params: {
          filter
        }})
        console.log(res)
      return res
    },
    async getDestinationFromCode(destinationCode) {
        let filter = { 
          "offset": 0,
          "limit": 100,
          "skip": 0,
          "where": {
            "code": destinationCode 
          }
        }
        let res = await this.$axios.get(process.env.DESTINATIONS_ROUTE, { params: {
          filter
        }})
        console.log(res)
      return res
    },
    async getTicketFromDestination(destinationCode) {
        let filter = { 
          "offset": 0,
          "limit": 100,
          "skip": 0,
          "where": {
            "to": destinationCode 
          }
        }
        console.log(this.$axios.baseUrl + process.env.TICKETS_ROUTE)
        let res = await this.$axios.get(process.env.TICKETS_ROUTE, { params: {
          filter
        }})
        console.log(res)
      return res
    },
}
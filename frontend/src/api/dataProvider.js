import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:5000";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: async (resource, params) => {
    console.log("getList called with Resource:", resource, ";Params:", params);
    const { json } = await httpClient(`${apiUrl}/${resource}`);
    const data = json.ctx.model.map((item) => ({
      id: item.code_name,
      name: item.name,
      code_name: item.code_name,
      version: item.version,
      type: item.type,
    }));
    return {
      data,
      total: json.ctx.model.length,
    };
  },
};

export default dataProvider;

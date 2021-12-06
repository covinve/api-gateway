const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
class GuideAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.guide_api_url;
  }
  async createGuide(guide) {
    guide = new Object(JSON.parse(JSON.stringify(guide)));
    return await this.post("/guide", guide);
  }
  async guideByIdGuide(idGuide) {
    return await this.get(`/guide/${idGuide}`);
  }
  async createGuide(guide) {
    guide = new Object(JSON.parse(JSON.stringify(guide)));
    return await this.post("/guide", guide);
  }
  async createState(state) {
    state = new Object(JSON.parse(JSON.stringify(state)));
    return await this.post("/state", state);
  }
  async stateByIdGuide(idGuide) {
    return await this.get(`/state/${idGuide}`);
  }
}
module.exports = GuideAPI;

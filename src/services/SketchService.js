// @flow
import humps from 'humps';
import api from '../config/api';

class SketchService {
  static async list(): Promise<any[]> {
    const response = await api.get('/sketches');
    const sketches: any = humps.camelizeKeys(response.data);
    return sketches;
  }

  static async create(params: any): Promise<any> {
    const response = await api.post('/sketches', humps.decamelizeKeys(params));
    const sketch: any = humps.camelizeKeys(response.data);
    return sketch;
  }

  static async search(sketchId: string): Promise<any> {
    const response = await api.post(`/sketches/${sketchId}/search`);
    const sketch: any = humps.camelizeKeys(response.data);
    return sketch;
  }

  static async put(sketchId: string, data: Object) {
    await api.put(`/sketches/${sketchId}`, data);
  }
}

export default SketchService;

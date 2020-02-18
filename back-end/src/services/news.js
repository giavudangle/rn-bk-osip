import News from "../models/news";
import UserService from "./user";

class NewsService {

    async create(data) {
        const post = await News.create(data);
        return post;
    }

    async getAll() {
        const post = await News.find();
        return post;
    }
    
    async getById(id) {
        const post = await News.findById(id);
        return post;
    }
      
    async update(id, data){
        const post = await News.findByIdAndUpdate(id, data,{
          new: true,
          runValidators: true
        });
        return post;
    }
}

export default new NewsService();
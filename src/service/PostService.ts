import HttpWrapper from "http/HttpWrapper";
import { Config } from "app-config";
import { Post } from "model/Post";

export const PostService = {
    getAll: async (start: number = 0, limit: number = 20): Promise<Post[]> => {
        const response = await HttpWrapper.get<Post[]>(
            `${Config.api_url}posts`,
            {_start: start, _limit: limit}
        );
        return response.parsedBody as Post[];
    }
};



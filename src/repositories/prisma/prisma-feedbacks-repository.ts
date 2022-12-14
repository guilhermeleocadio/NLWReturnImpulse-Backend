import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedbacks-respository";

export class PrismaFeedbackRepository implements FeedbackRepository{
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedBack.create({
            data:{
                type,
                comment,
                screenshot,
            }
        });
    }
}
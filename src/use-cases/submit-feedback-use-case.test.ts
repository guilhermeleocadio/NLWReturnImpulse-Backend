import { SubmitFeedbackUseCase } from "./submit-feedback-use-cases"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitfeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy }, 
    { sendMail: sendMailSpy}
)

describe('Submit feefback',() =>{
    it('should be able to submit a feedback', async () =>{
        await expect(submitfeedback.execute({
            type: 'BUG',
            comment: 'exemple comment', 
            screenshot: 'data:image/png;base64,hiuhihuihuiiuh',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit feedback without type', async () =>{
        await expect(submitfeedback.execute({
            type: '',
            comment: 'exemple comment', 
            screenshot: 'data:image/png;base64,hiuhihuihuiiuh',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback without comment', async () =>{
        await expect(submitfeedback.execute({
            type: 'BUG',
            comment: '', 
            screenshot: 'data:image/png;base64,hiuhihuihuiiuh',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback wit an invalid screenshot', async () =>{
        await expect(submitfeedback.execute({
            type: 'BUG',
            comment: 'exemple comment', 
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    })
})
import { functions } from './firebase';

export const feedback = async (text) => {
    const func = functions.httpsCallable('feedback');
    try  {
        console.log('send data:', text);
        const { data } = await func({ text });
        return data;
        // const sanitizedMessage = result.data.text;
    } catch(error) {
        // Getting the Error details.
        // const code = error.code;
        // const message = error.message;
        // const details = error.details;
        // ...
        console.error('error:', error);
        // TODO エラー処理
    }
}

export default { feedback }


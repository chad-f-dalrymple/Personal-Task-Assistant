// import { google } from '@ai-sdk/google';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

const google = createGoogleGenerativeAI({
  apiKey: 'AIzaSyB0EEovrAyAAwYx6lMTJc9V1BsPQfHQwNw',

})

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: google(apiIdentifier),
    middleware: customMiddleware,
  });
};

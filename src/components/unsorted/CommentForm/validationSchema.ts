import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().max(40).required('Name is required'),
  text: yup
    .string()
    .min(3, 'Text should be of minimum 3 character length')
    .required('Text is required'),
  storyId: yup.number().required('Story is required'),
});

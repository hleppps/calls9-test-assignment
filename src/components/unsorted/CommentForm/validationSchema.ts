import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().max(40).required('Name is required'),
  text: yup
    .string()
    .min(3, 'Comment text should be of minimum 3 character length')
    .required('Comment text is required'),
  storyId: yup.number().required('Story is required'),
});
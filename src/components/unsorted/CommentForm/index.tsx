import { Box, Button, TextField, Typography } from '@mui/material';
import { Select } from 'components/ui/Select';
import { SelectOption } from 'components/ui/Select/types';
import { FormikHelpers, FormikValues, useFormik } from 'formik';
import { FC, useMemo } from 'react';
import { Comment, Story } from 'types/global';
import { postComment } from 'utils/api/commentService';
import { ActionType } from 'utils/constants';

import { styles } from './styles';
import { validationSchema } from './validationSchema';

export interface CommentProps {
  stories: Story[];
}

export interface CommentFormValues extends FormikValues {
  name: string;
  text: string;
  storyId: number;
}

export const CommentForm: FC<CommentProps> = ({ stories }) => {
  const onSubmitHandler = (
    { name, text, storyId }: CommentFormValues,
    helpers: FormikHelpers<CommentFormValues>,
  ) => {
    const time = new Date().toISOString();
    const comment: Comment = {
      by: name,
      text,
      parent: storyId,
      type: ActionType.COMMENT,
      time,
    };
    postComment(comment)
      .then(() => {
        console.log(comment);
      })
      .catch((error) => {
        // Error can be handled in here
        console.error(error);
        helpers.setSubmitting(false);
      });
    helpers.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      text: '',
      storyId: stories[0]?.id,
    },
    validationSchema,
    onSubmit: onSubmitHandler,
  });

  const storySelectOptions: SelectOption[] = useMemo(
    () =>
      stories.map((story, index) => ({
        label: `#${index + 1} - ${story.title}`,
        value: story.id,
      })),
    [stories],
  );

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={styles.form}>
      <Typography variant="h3" sx={styles.title}>
        Leave your comment
      </Typography>
      <Box sx={styles.formRow}>
        <TextField
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={styles.nameInput}
        />
        <Select
          label="Story"
          name="storyId"
          value={formik.values.storyId}
          onChange={formik.handleChange}
          error={formik.touched.storyId && Boolean(formik.errors.storyId)}
          options={storySelectOptions}
          formControlSx={styles.storyInput}
        />
      </Box>
      <TextField
        label="Comment text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        error={formik.touched.text && Boolean(formik.errors.text)}
        helperText={formik.touched.text && formik.errors.text}
        fullWidth
        multiline
        sx={styles.commentTextInput}
      />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        type="submit"
        sx={{ my: 1, padding: 2 }}
        disabled={formik.isSubmitting}
      >
        Submit
      </Button>
    </Box>
  );
};

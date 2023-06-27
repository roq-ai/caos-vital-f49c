import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  energy_level: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});

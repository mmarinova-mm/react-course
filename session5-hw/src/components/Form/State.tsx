import { connect } from 'formik';

interface IProps {
  children: (state: any) => any;
}

export default connect<IProps>(
  ({
    formik,
    children,
  }) => children(formik),
);

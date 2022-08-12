import { CgSpinner } from 'react-icons/cg';
import styles from './Spinner.module.scss';

export const Spinner = ({ size }) => {
  return <CgSpinner size={size} className={styles.spinner} />;
};

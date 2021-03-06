import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import styles from './styles';

export default class Picker extends AbstractPicker {
  static defaultProps = { ...getDefaultProps(), styles };

  protected popupProps = {};
}

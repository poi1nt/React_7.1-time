/* eslint-disable react/display-name */
import moment from "moment";

export const DateTimePretty = (WrappedComponent) => {
  return function (props) {
    const { date } = props;
    const formatDate = (date) => {
      const now = moment();
      const videoDate = moment(date);
      const diffInMinutes = now.diff(videoDate, 'minutes');
      const diffInHours = now.diff(videoDate, 'hours');
      const diffInDays = now.diff(videoDate, 'days');

      if (diffInMinutes < 60) {
        return `${diffInMinutes} минут назад`;
        } else if (diffInHours < 24) {
            return `${diffInHours} часов назад`;
        } else {
            return `${diffInDays} дней назад`;
        }
    }

    return <WrappedComponent date={formatDate(date)} />;
  }
}


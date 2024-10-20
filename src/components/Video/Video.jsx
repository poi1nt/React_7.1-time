import { DateTime } from "../DateTime";
import { DateTimePretty } from "../DateTimePretty";

const DateTimeWithPretty = DateTimePretty(DateTime);

export const Video = (props) => {
  const { url, date} = props;
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimeWithPretty date={date} />
    </div>
  )
}

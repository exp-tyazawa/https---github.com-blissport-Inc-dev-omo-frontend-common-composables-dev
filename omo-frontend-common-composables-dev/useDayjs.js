import dayjs, { locale, extend } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
// 日本語表示にするためlocaleを追加
import 'dayjs/locale/ja';

locale('ja');
extend(utc);
extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

export default dayjs;

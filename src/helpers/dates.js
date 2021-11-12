import moment from "moment";

export const formatDate = (format, date = new Date()) => {
    return moment(String(date)).format(format)
}

export const timeElapsed = (date) => {
    return moment(String(date)).fromNow();
}
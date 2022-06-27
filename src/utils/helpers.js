export const getDateObject = dateString => new Date(dateString.replace(/(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3'));

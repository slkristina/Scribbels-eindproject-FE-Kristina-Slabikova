export default function formatDutchDate(isoString) {
    const date = new Date(isoString);
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/Amsterdam'
    };
    return new Intl.DateTimeFormat('nl-NL', options).format(date).replace(' ', ' - ');
}

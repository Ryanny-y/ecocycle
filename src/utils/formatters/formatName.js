export default function formatName(record) {
  return `${record.first_name.charAt(0).toUpperCase()}${record.first_name.slice(1)} ${record.middle_name.charAt(0).toUpperCase()}. ${record.last_name.charAt(0).toUpperCase()}${record.last_name.slice(1)}`
}
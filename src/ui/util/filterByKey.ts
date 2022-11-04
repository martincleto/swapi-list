type FilterByStringArgs = {
  key: string,
  match: string,
  source: never[],
}

const filterByKey = ({ key, match, source }: FilterByStringArgs) =>
  source.filter((item) => (item[key] as string).toLowerCase().includes(match.toLowerCase()))

export default filterByKey
let debounceTimer: number

const debounce = (callback: () => void, time: number) => {
  window.clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(callback, time)
}

export default debounce

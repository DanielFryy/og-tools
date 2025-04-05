const useNumberFormatter = (options?: Intl.NumberFormatOptions) => {
  return (num: number | string) => {
    const parsedNum = typeof num === "string" ? parseFloat(num) : num;
    if (isNaN(parsedNum)) return num;
    return new Intl.NumberFormat("en-US", options).format(parsedNum);
  };
};

export default useNumberFormatter;

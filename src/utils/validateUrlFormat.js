const validateUrlFormat = (inputValue) => {
  const urlCheckRule =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlCheckRule.test(inputValue);
};

export default validateUrlFormat;

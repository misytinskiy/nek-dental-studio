module.exports = async function getRequestConfig({ locale }) {
  const current = locale ?? "ka";

  return {
    locale: current,
    messages: (await import(`../../messages/${current}.json`)).default,
  };
};

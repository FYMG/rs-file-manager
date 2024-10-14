function getArgs() {
  return process.argv
    .slice(2)
    .map((arg) => arg.replace(/"/g, ''))
    .filter((arg) => arg)
    .reduce((args, arg) => {
      const [key, value] = arg.split('=');
      args[key] = value;
      return args;
    }, {});
}

export default getArgs;

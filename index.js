const startof = (source = [], clone = true) => {
  if (source === undefined) {
    return new Error("please enter valid data .");
  }

  if (source.constructor === Array) {
    return clone ? [...source].shift() : source[0];
  }

  if (source.constructor === Object) {
    return startof(
      Object.keys(source).map(key => {
        return (json => ((json[key] = source[key]), json))({});
      }),
      clone
    );
  }
};

export default startof;

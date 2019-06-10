export const random = async (input, context, callback) => {
  callback(null, {
    random: parseInt(Math.random()*100);
  })
}

export const fifty = async (input, context, callback) => {
  callback(null, {
    threshold: 50
  });
}

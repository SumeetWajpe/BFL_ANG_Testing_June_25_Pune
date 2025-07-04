function fetchData(callback) {
  setTimeout(() => {
    callback("Success!");
  }, 1000);
}

test.skip("fetchData calls callback with 'Success!' after 1 second", done => {
  function CallMeBack(msg) {
    try {
      expect(msg).toBe("Success!");
      done();
    } catch (error) {
      console.log(error);
      done(error);
    }
  }

  fetchData(CallMeBack);
});

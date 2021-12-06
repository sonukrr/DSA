var letterCasePermutation = function (s) {
  const perms = [];
  backTrack("", s);
  return perms;

  function backTrack(computed, pending) {
    if (computed.length == s.length) {
      perms.push(computed);
      return;
    }

    for (let i = 0; i < pending.length; i++) {
      let char = pending[i];
      if (!isNaN(char)) {
        //digits
        computed = computed + char;
      } else {
        backTrack(computed + char.toLowerCase(), pending.slice(i + 1));
        backTrack(computed + char.toUpperCase(), pending.slice(i + 1));
      }
    }

    if (computed.length == s.length) perms.push(computed); // if only digits
  }
};

console.log(letterCasePermutation("a1b2"));

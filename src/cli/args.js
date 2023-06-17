const parseArgs = () => {
  let result = '';

  for (let i = 2, args = process.argv; i < args.length; i++) {
    if (i % 2 == 0) {
      result += `${args[i]} is `;
    } else {
      result += args[i] + '\n';
    }
  }

  console.log(result);
};

parseArgs();

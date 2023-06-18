const parseEnv = () => {
  for (const variable of Object.entries(process.env)) {
    const [key, value] = variable;
    if (key.startsWith('RSS_')) {
      console.log(key, value);
    }
  }
};

parseEnv();

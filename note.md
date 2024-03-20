
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dummyapi.io/data/v1/post?limit=10',
          {
            headers: {
              'app-id': '65f019092d58ea297a30a3a2',
            },
          }
        );
        console.log('Response:', response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
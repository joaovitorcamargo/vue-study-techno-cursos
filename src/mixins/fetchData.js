const fetchData = {
  data() {
    return {
      loading: false,
      api: "",
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000/${url}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(() => {
            this.loading = false;
            this.api = r;
          }, 1500);
        });
    },
  },
};

export default fetchData;

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0286e3369a6897edef448e5f73cf2c3054447ffb44b06a3c0a84b2d77e9ae70b"
  }
});

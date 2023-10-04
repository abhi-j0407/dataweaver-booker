import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  try {
    const { data } = await axios.get(
      "http://68.178.162.203:8080/application-test-v1.1/books"
    );
    console.log("Data: ", data);
    //   setBooks(data.data);
    //   setPagination(data.pagination);
    console.log(data);
  } catch (err) {
    console.log("Error: ", err);
  }
});

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {},
});

export default booksSlice.reducer;

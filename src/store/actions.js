import axiosClient from "../axiosClient";

export async function searchMeals({ commit }, keyword) {
  const response = await axiosClient.get(`search.php?s=${keyword}`);
  commit("setSearchMeals", response.data.meals);
}

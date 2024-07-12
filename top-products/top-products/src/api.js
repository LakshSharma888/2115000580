const BASE_URL = 'http://20.244.56.144/test/companies/: companyname/categories/:categoryname/products?top=n&minPri ce=pamaxPrice=q';

export const fetchTopProducts = async (company, category, minPrice, maxPrice) => {
  const response = await fetch(`${BASE_URL}/companies/${company}/categories/${category}/products/top-10?minPrice=${minPrice}&maxPrice=${maxPrice}`);
  return response.json();
};
